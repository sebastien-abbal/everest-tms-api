import { config as dotenvConfig } from 'dotenv';
import { EverestApi } from '../services/everest-api';

dotenvConfig();

describe('Everest service - General', () => {
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

  beforeAll(async () => {
    await authenticatedEverestApi.authenticate();
  });

  describe('Authenticate', () => {
    it('should return a succesful authentication', async () => {
      await authenticatedEverestApi.authenticate().then((res) => {
        expect(res).toHaveProperty('token');
      });
    });

    it('should return a failed authentication with wrong client_id', async () => {
      await expect(erroredEverestApi.authenticate()).rejects.toThrow(Error);
    });
  });

  describe('Infos', () => {
    it('should return a infos', async () => {
      await authenticatedEverestApi.getInfos().then((res) => {
        expect(res.platform).toMatchObject({
          logo: expect.any(String),
          title: expect.any(String),
          color: expect.any(String),
          email: expect.any(String),
          phone: expect.any(String),
          agent_support_email: expect.any(String),
          agent_support_tel: expect.any(String),
          agent_support_text: expect.any(String),
          force_route_order: expect.any(Boolean),
          client_support_email: expect.any(String),
          client_support_tel: expect.any(String),
        });
      });
    });

    it('should return a failed authentication', async () => {
      await expect(erroredEverestApi.getInfos()).rejects.toThrow(Error);
    });
  });

  describe('Availabilities', () => {
    it('should return availabilities', async () => {
      await authenticatedEverestApi.getAvailabilities().then((res) => {
        expect(res.availabilities).toMatchObject({
          service_1: expect.arrayContaining([
            expect.objectContaining({ index: 1 }),
          ]),
          service_2: expect.arrayContaining([
            expect.objectContaining({ index: 1 }),
          ]),
        });
      });
    });

    it('should return a failed authentication', async () => {
      await expect(erroredEverestApi.getAvailabilities()).rejects.toThrow(
        Error,
      );
    });
  });

  describe('Services', () => {
    it('should return services', async () => {
      await authenticatedEverestApi.getServices().then((res) => {
        expect(res.services[0]).toMatchObject({
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
          icon: expect.any(String),
          color: expect.any(String),
          delay: expect.any(Number),
          notice_delay: expect.any(Number),
          handling_time: expect.any(Number),
          setup_time: expect.any(Number),
          tolerance_time: expect.any(Number),
          allowed_statuses: expect.any(Array),
          allowed_vehicles: expect.any(Array),
          ignore_optim_start: expect.any(Boolean),
          ignore_optim_end: expect.any(Boolean),
          is_flat_price: expect.any(Boolean),
          profile: expect.any(String),
          additional_services: expect.any(Array),
          vat_percent: expect.any(Number),
        });
      });
    });

    // it('should return a failed authentication', async () => {
    //   await expect(erroredEverestApi.getServices()).rejects.toThrow(Error);
    // });
  });

  describe('VehicleTypes', () => {
    it('should return vehicle types', async () => {
      await authenticatedEverestApi.getVehicleTypes().then((res) => {
        expect(res.vehicle_types[0]).toMatchObject({
          id: expect.any(Number),
          name: expect.any(String),
          type: expect.any(Number),
          engine: expect.any(Number),
          length: expect.any(Number),
          width: expect.any(Number),
          depth: expect.any(Number),
          max_weight: expect.any(Number),
          capacity: expect.any(Number),
          max_tasks: expect.any(Number),
          cost_per_day: expect.any(Number),
          cost_per_km: expect.any(Number),
          speed_factor: expect.any(Number),
          skills: expect.any(Array),
        });
      });
    });

    it('should return a failed authentication', async () => {
      await expect(erroredEverestApi.getVehicleTypes()).rejects.toThrow(Error);
    });
  });

  describe('AreasOfService', () => {
    it('should return areas of service', async () => {
      await authenticatedEverestApi.getAreasOfService().then((res) => {
        expect(res.areas_of_service[0]).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String),
          country: expect.any(String),
          areas: expect.any(String),
        });
      });
    });

    it('should return a failed authentication', async () => {
      await expect(erroredEverestApi.getAreasOfService()).rejects.toThrow(
        Error,
      );
    });
  });
});
