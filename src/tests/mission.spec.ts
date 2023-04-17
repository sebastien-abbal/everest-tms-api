import { config as dotenvConfig } from 'dotenv';
import { EverestApi } from '../services/everest-api';
import { SERVICE_1_ID } from '../tests/config/constants';
import { EverestOrderByEnum } from '../types/enums';

dotenvConfig();

describe('Everest service - Mission', () => {
  const ADDRESS_START = '114 Rue de la République, 13002 Marseille';
  const ADDRESS_END =
    '10 Traverse De La Sablière, Av. de Saint Menet, 13011 Marseille';
  const START_DATE = new Date();

  let authenticatedEverestApi: EverestApi = new EverestApi({
    endpoint: process.env.API_ENDPOINT_URL,
    client_id: process.env.API_CLIENT_ID,
    client_secret: process.env.API_CLIENT_SECRET,
  });
  let erroredEverestApi: EverestApi = new EverestApi({
    endpoint: process.env.API_ENDPOINT_URL,
    client_id: 'xxx',
    client_secret: 'xxx',
  });
  let mission_ref: string = null;

  beforeAll(async () => {
    await authenticatedEverestApi.authenticate();
  });

  describe('Check if is handled address', () => {
    it('should return true', async () => {
      return authenticatedEverestApi
        .getIsHandledAddress({ address: ADDRESS_START })
        .then((res) => {
          expect(res.success).toBe(true);
        });
    });

    it('should return a failed response because of authentication', async () => {
      return erroredEverestApi
        .getIsHandledAddress({
          address: ADDRESS_START,
          start_date: START_DATE,
          service_id: SERVICE_1_ID,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Get statuses', () => {
    it('should return an array of statuses', async () => {
      return authenticatedEverestApi.getMissionStatuses().then((res) => {
        expect(res.success).toBe(true);
        expect(Object.keys(res.statuses).length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should return a failed statuses authentication', async () => {
      return erroredEverestApi.getMissionStatuses().then((res) => {
        expect(res).toHaveProperty('error');
      });
    });
  });

  describe('Estimate a mission', () => {
    it('should return a mission estimated', async () => {
      return authenticatedEverestApi
        .estimateMission({
          service_id: SERVICE_1_ID,
          address_start: ADDRESS_START,
          address_end: ADDRESS_START,
          start_date: START_DATE,
        })
        .then((res) => {
          expect(res).toMatchObject({
            price_excl: expect.any(Number),
            price_excl_formatted: expect.any(String),
            price_incl: expect.any(Number),
            price_incl_formatted: expect.any(String),
          });
        });
    });

    it('should return a failed mission estimation with wrong service_id', async () => {
      return authenticatedEverestApi
        .estimateMission({
          service_id: -1,
          address_start: ADDRESS_START,
          address_end: ADDRESS_END,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Create mission', () => {
    it('should return a mission created', async () => {
      return authenticatedEverestApi
        .createMission({
          service_id: SERVICE_1_ID,
          address_start: ADDRESS_START,
          address_end: ADDRESS_END,
          start_date: START_DATE,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.mission).toMatchObject({
            ref: expect.any(String),
            type: '',
            client_ref: '',
            start_date: expect.any(Number),
            nice_date: expect.any(String),
            service_id: 1,
            service: expect.any(String),
            service_delay: expect.any(Number),
            service_color: expect.any(String),
            address_end: ADDRESS_END,
            address_end_postal_code: '13011',
            address_end_lat: '53.512238',
            address_end_lng: '13.018911',
            address_end_comment: '',
            address_end_name: '',
            address_end_company: '',
            address_end_tel: '',
            address_end_phone: '',
            client_id: '',
            client_name: '',
            client_photo: '',
            distance: expect.any(String),
            distance_formatted: expect.any(String),
            duration: expect.any(String),
            duration_formatted: expect.any(String),
            comment: '',
            requires_return: 0,
            has_agent: 0,
            has_status: 1,
            has_route: 0,
            additionals: [],
            weight: 0,
            volume: 0,
            packages: [],
            skills: [],
            status: 'nouvelle-mission',
            status_text: 'Nouvelle mission',
            status_icon: expect.any(String),
            status_date: expect.any(Number),
            status_extras: [''],
            is_cancel: 0,
            is_success: 0,
            is_fail: 0,
            is_dispatch: 0,
            is_pickup: 0,
            is_finished: 0,
            address_start: ADDRESS_START,
            address_start_postal_code: '13002',
            address_start_lat: '43.304391',
            address_start_lng: '5.367699',
            address_start_comment: '',
            address_start_name: '',
            address_start_company: '',
            address_start_tel: '',
            address_start_phone: '',
            potential_vehicles: expect.any(Object),
            price_excl: expect.any(String),
            price_excl_formatted: expect.any(String),
            price_incl: expect.any(String),
            price_incl_formatted: expect.any(String),
            agent_price_excl: expect.any(String),
            agent_price_excl_formatted: expect.any(String),
            agent_price_incl: expect.any(String),
            agent_price_incl_formatted: expect.any(String),
            address_start_email: '',
            address_end_email: '',
            medias: [],
            files: [],
            custom_infos: [],
            establishment_id: '',
            creator: expect.objectContaining({
              type: 'user',
              id: expect.any(Number),
              name: expect.any(String),
            }),
            comments: [],
          });

          if (res.mission) mission_ref = res.mission.ref;
        });
    });

    it('should return a failed mission creation with wrong service_id', async () => {
      return authenticatedEverestApi
        .createMission({
          service_id: -1,
          address_start: ADDRESS_START,
          address_end: ADDRESS_END,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Get a mission', () => {
    it('should return a mission', async () => {
      return authenticatedEverestApi
        .getMission({ ref: mission_ref })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.mission).toMatchObject({
            ref: mission_ref,
          });
        });
    });

    it('should not return a mission because of wrong mission ref', async () => {
      return authenticatedEverestApi
        .getMission({
          ref: '',
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Get missions', () => {
    it('should return an array of missions', async () => {
      return authenticatedEverestApi
        .getMissions({
          order_by: 'service',
          order_by_order: EverestOrderByEnum.DESC,
          date_between_start: new Date(`${new Date().getFullYear() - 1}-01-01`),
          date_between_end: new Date(`${new Date().getFullYear() + 1}-01-01`),
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.missions.length).toBeGreaterThanOrEqual(1);
        });
    });

    it('should return an empty array of missions because of wrong agent', async () => {
      return authenticatedEverestApi
        .getMissions({ order_by: 'service', service: -1 })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.missions.length).toBeGreaterThanOrEqual(0);
        });
    });

    it('should return a failed missions authentication', async () => {
      return erroredEverestApi
        .getMissions({ order_by: 'service', service: -1 })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Update a mission', () => {
    const ADDRESS_START_NAME = 'START UPDATED';
    const ADDRESS_END_NAME = 'END UPDATED';

    it('should return a mission updated', async () => {
      return authenticatedEverestApi
        .updateMission({
          ref: mission_ref,
          service_id: SERVICE_1_ID,
          address_start_name: ADDRESS_START_NAME,
          address_end_name: ADDRESS_END_NAME,
          start_date: START_DATE,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.mission).toMatchObject({
            ref: mission_ref,
            service_id: SERVICE_1_ID,
            address_start_name: ADDRESS_START_NAME,
            address_end_name: ADDRESS_END_NAME,
          });
        });
    });

    it('should return a failed mission update with wrong service_id', async () => {
      return authenticatedEverestApi
        .updateMission({
          ref: mission_ref,
          service_id: -1,
          address_start_name: ADDRESS_START_NAME,
          address_end_name: ADDRESS_END_NAME,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Update status of a mission', () => {
    it('should return a mission updated', async () => {
      return authenticatedEverestApi
        .updateMissionStatus({
          ref: mission_ref,
          status: 'scann',
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.mission).toMatchObject({
            ref: mission_ref,
            status: 'scann',
          });
        });
    });

    it('should return a failed mission update status with wrong ref', async () => {
      return authenticatedEverestApi
        .updateMissionStatus({
          ref: 'wrong-ref',
          status: 'livr',
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Cancel a mission', () => {
    it('should return a mission canceled', async () => {
      return authenticatedEverestApi
        .cancelMission({
          ref: mission_ref,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.mission).toMatchObject({
            ref: mission_ref,
          });
        });
    });

    it('should return a failed mission cancelation with wrong ref', async () => {
      return authenticatedEverestApi
        .cancelMission({
          ref: 'wrong-ref',
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Delete a mission', () => {
    it('should return a mission deleted', async () => {
      return authenticatedEverestApi
        .deleteMission({
          ref: mission_ref,
        })
        .then((res) => {
          expect(res.success).toBe(true);
        });
    });

    it('should return a failed mission deletion with wrong ref', async () => {
      return authenticatedEverestApi
        .deleteMission({
          ref: 'wrong-ref',
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });
});
