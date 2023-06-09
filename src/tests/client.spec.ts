import { config as dotenvConfig } from 'dotenv';
import { v4 as uuid } from 'uuid';
import { EverestApi } from '../services/everest-api';

dotenvConfig();

describe('Everest service - Client', () => {
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
  let client_id: number = null;

  beforeAll(async () => {
    await authenticatedEverestApi.authenticate();
  });

  describe('Create client', () => {
    it('should return a client created', async () => {
      const password = uuid();
      return authenticatedEverestApi
        .createClient({
          email: `${uuid()}@test.fr`,
          first_name: 'Léon',
          last_name: 'LEFEBVRE',
          tel: '0123456789',
          password,
          password_repeat: password,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.client).toMatchObject({
            id: expect.any(String),
          });

          if (res.client) client_id = parseInt(res.client.id.toString());
        });
    });

    it('should return a failed client creation because of missing tel', async () => {
      const password = uuid();
      await expect(
        authenticatedEverestApi
          // @ts-ignore: Force missing telephone
          .createClient({
            email: `${uuid()}@test.fr`,
            first_name: 'Léon',
            last_name: 'LEFEBVRE',
            password,
            password_repeat: password,
          }),
      ).rejects.toThrow(Error);
    });
  });

  describe('Get a client', () => {
    it('should return a client', async () => {
      return authenticatedEverestApi
        .getClient({ id: client_id })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.client).toMatchObject({
            id: client_id,
          });
        });
    });

    it('should not return a client because of wrong client id', async () => {
      await expect(
        authenticatedEverestApi.getClient({
          id: -1,
        }),
      ).rejects.toThrow(Error);
    });
  });

  describe('Get clients', () => {
    it('should return an array of clients', async () => {
      return authenticatedEverestApi.getClients({}).then((res) => {
        expect(res.success).toBe(true);
        expect(res.clients.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should return an empty array of clients because of wrong agent', async () => {
      return authenticatedEverestApi.getClients().then((res) => {
        expect(res.success).toBe(true);
        expect(res.clients.length).toBeGreaterThanOrEqual(0);
      });
    });

    it('should return a failed clients authentication', async () => {
      await expect(erroredEverestApi.getClients()).rejects.toThrow(Error);
    });
  });

  describe('Update a client', () => {
    it('should return a client updated', async () => {
      return authenticatedEverestApi
        .updateClient({
          id: client_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.client).toMatchObject({
            id: client_id,
          });
        });
    });

    it('should return a failed client update with wrong id', async () => {
      await expect(
        authenticatedEverestApi.updateClient({
          id: -1,
        }),
      ).rejects.toThrow(Error);
    });
  });

  describe('Delete a client', () => {
    it('should return a client deleted', async () => {
      return authenticatedEverestApi
        .deleteClient({
          id: client_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
        });
    });

    it('should return a failed client deletion with wrong id', async () => {
      await expect(
        authenticatedEverestApi.deleteClient({
          id: -1,
        }),
      ).rejects.toThrow(Error);
    });
  });
});
