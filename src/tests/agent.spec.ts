import { config as dotenvConfig } from 'dotenv';
import { v4 as uuid } from 'uuid';
import { EverestApi } from '../services/everest-api';

dotenvConfig();

describe('Everest service - Agent', () => {
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
  let agent_id: number = null;

  beforeAll(async () => {
    await authenticatedEverestApi.authenticate();
  });

  describe('Create agent', () => {
    it('should return an agent created', async () => {
      const password = uuid();
      return authenticatedEverestApi
        .createAgent({
          email: `${uuid()}@test.fr`,
          first_name: 'Léon',
          last_name: 'LEFEBVRE',
          password,
          password_repeat: password,
          address_line1: '114 Rue de la République, 13002 Marseille',
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.agent).toMatchObject({
            id: expect.any(String),
          });

          if (res.agent) agent_id = parseInt(res.agent.id.toString());
        });
    });

    it('should return a failed agent creation because of missing password', async () => {
      const password = uuid();
      return (
        authenticatedEverestApi
          // @ts-ignore: Force missing telephone
          .createAgent({
            email: `${uuid()}@test.fr`,
            first_name: 'Léon',
            last_name: 'LEFEBVRE',
          })
          .then((res) => {
            expect(res).toHaveProperty('error');
          })
      );
    });
  });

  describe('Get an agent', () => {
    it('should return an agent', async () => {
      return authenticatedEverestApi.getAgent({ id: agent_id }).then((res) => {
        expect(res.success).toBe(true);
        expect(res.agent).toMatchObject({
          id: agent_id,
        });
      });
    });

    it('should not return an agent because of wrong agent id', async () => {
      return authenticatedEverestApi
        .getAgent({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Get agents', () => {
    it('should return an array of agents', async () => {
      return authenticatedEverestApi.getAgents({}).then((res) => {
        expect(res.success).toBe(true);
        expect(res.agents.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should return an empty array of agents because of wrong agent', async () => {
      return authenticatedEverestApi.getAgents().then((res) => {
        expect(res.success).toBe(true);
        expect(res.agents.length).toBeGreaterThanOrEqual(0);
      });
    });

    it('should return a failed agents authentication', async () => {
      return erroredEverestApi.getAgents().then((res) => {
        expect(res).toHaveProperty('error');
      });
    });
  });

  describe('Update an agent', () => {
    const ADDRESS_START_NAME = 'START UPDATED';
    const ADDRESS_END_NAME = 'END UPDATED';

    it('should return an agent updated', async () => {
      return authenticatedEverestApi
        .updateAgent({
          id: agent_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.agent).toMatchObject({
            id: agent_id,
          });
        });
    });

    it('should return a failed agent update with wrong id', async () => {
      return authenticatedEverestApi
        .updateAgent({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Delete an agent', () => {
    it('should return an agent deleted', async () => {
      return authenticatedEverestApi
        .deleteAgent({
          id: agent_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
        });
    });

    it('should return a failed agent deletion with wrong id', async () => {
      return authenticatedEverestApi
        .deleteAgent({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });
});
