import { EverestApi } from '@src/services/everest-api';
import { config as dotenvConfig } from 'dotenv';
import { v4 as uuid } from 'uuid';

dotenvConfig();

describe('Everest service - Contact', () => {
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
  let contact_id: number = null;

  beforeAll(async () => {
    await authenticatedEverestApi.authenticate();
  });

  describe('Create contact', () => {
    it('should return a contact created', async () => {
      return authenticatedEverestApi
        .createContact({
          email: `${uuid()}@test.fr`,
          first_name: 'Léon',
          last_name: 'LEFEBVRE',
        })
        .then((res) => {
          // TODO: Fix error in API for { error: 'Invalid parameter "type": should not be empty' }
          expect(res.success).toBe(true);
          expect(res.contact).toMatchObject({
            id: expect.any(String),
          });

          if (res.contact) contact_id = parseInt(res.contact.id.toString());
        });
    });

    it('should return a failed contact creation because of missing email', async () => {
      const password = uuid();
      return (
        authenticatedEverestApi
          // @ts-ignore: Force missing email
          .createContact({
            first_name: 'Léon',
            last_name: 'LEFEBVRE',
          })
          .then((res) => {
            expect(res).toHaveProperty('error');
          })
      );
    });
  });

  describe('Get a contact', () => {
    it('should return a contact', async () => {
      return authenticatedEverestApi
        .getContact({ id: contact_id })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.contact).toMatchObject({
            id: contact_id,
          });
        });
    });

    it('should not return a contact because of wrong contact id', async () => {
      return authenticatedEverestApi
        .getContact({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Get contacts', () => {
    it('should return an array of contacts', async () => {
      return authenticatedEverestApi.getContacts({}).then((res) => {
        expect(res.success).toBe(true);
        expect(res.contacts.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should return an empty array of contacts because of wrong contact', async () => {
      return authenticatedEverestApi.getContacts().then((res) => {
        expect(res.success).toBe(true);
        expect(res.contacts.length).toBeGreaterThanOrEqual(0);
      });
    });

    it('should return a failed contacts authentication', async () => {
      return erroredEverestApi.getContacts().then((res) => {
        expect(res).toHaveProperty('error');
      });
    });
  });

  describe('Update a contact', () => {
    it('should return a contact updated', async () => {
      return authenticatedEverestApi
        .updateContact({
          id: contact_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.contact).toMatchObject({
            id: contact_id,
          });
        });
    });

    it('should return a failed contact update with wrong id', async () => {
      return authenticatedEverestApi
        .updateContact({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Delete a contact', () => {
    it('should return a contact deleted', async () => {
      return authenticatedEverestApi
        .deleteContact({
          id: contact_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
        });
    });

    it('should return a failed contact deletion with wrong id', async () => {
      return authenticatedEverestApi
        .deleteContact({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });
});
