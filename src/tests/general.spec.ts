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
});
