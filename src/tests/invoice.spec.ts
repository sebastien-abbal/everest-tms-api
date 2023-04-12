import { config as dotenvConfig } from 'dotenv';
import { EverestApi } from '../services/everest-api';
import { InvoiceTypeEnum } from '../types';

dotenvConfig();

describe('Everest service - Invoice', () => {
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
  let invoice_id: number = null;

  beforeAll(async () => {
    await authenticatedEverestApi.authenticate();
  });

  describe('Create invoice', () => {
    it('should return a invoice created', async () => {
      return authenticatedEverestApi
        .createInvoice({
          type: InvoiceTypeEnum.invoice,
          title: 'Invoice n°1',
          description: 'Description test',
          name_or_company: 'Test Corp.',
          address: '114 Rue de la République, 13002 Marseille',
          amount_incl: 20,
          amount_excl: 24,
          created_for: 1,
        })
        .then((res) => {
          // TODO: Fix error in API for { error: 'Unknown errorMethod setAmountExcl not found in Everest\\Mvc\\Models\\Invoice classname' }
          // TODO: Fix error in API for { error: 'Invalid parameter "type": should not be empty' } if type = estimate (0)
          expect(res.success).toBe(true);
          expect(res.invoice).toMatchObject({
            id: expect.any(String),
          });

          if (res.invoice) invoice_id = parseInt(res.invoice.id.toString());
        });
    });

    it('should return a failed invoice creation because of missing password', async () => {
      return (
        authenticatedEverestApi
          // @ts-ignore: Force missing inputs
          .createInvoice({
            title: 'Invoice n°1',
            description: 'Description test',
            name_or_company: 'Test Corp.',
            created_for: 1,
          })
          .then((res) => {
            expect(res).toHaveProperty('error');
          })
      );
    });
  });

  describe('Get a invoice', () => {
    it('should return a invoice', async () => {
      return authenticatedEverestApi
        .getInvoice({ id: invoice_id })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.invoice).toMatchObject({
            id: invoice_id,
          });
        });
    });

    it('should not return a invoice because of wrong invoice id', async () => {
      return authenticatedEverestApi
        .getInvoice({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Get invoices', () => {
    it('should return an array of invoices', async () => {
      return authenticatedEverestApi.getInvoices({}).then((res) => {
        expect(res.success).toBe(true);
        expect(res.invoices.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should return an empty array of invoices because of wrong invoice', async () => {
      return authenticatedEverestApi.getInvoices().then((res) => {
        expect(res.success).toBe(true);
        expect(res.invoices.length).toBeGreaterThanOrEqual(0);
      });
    });

    it('should return a failed invoices authentication', async () => {
      return erroredEverestApi.getInvoices().then((res) => {
        expect(res).toHaveProperty('error');
      });
    });
  });

  describe('Update a invoice', () => {
    const ADDRESS_START_NAME = 'START UPDATED';
    const ADDRESS_END_NAME = 'END UPDATED';

    it('should return a invoice updated', async () => {
      return authenticatedEverestApi
        .updateInvoice({
          id: invoice_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
          expect(res.invoice).toMatchObject({
            id: invoice_id,
          });
        });
    });

    it('should return a failed invoice update with wrong id', async () => {
      return authenticatedEverestApi
        .updateInvoice({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });

  describe('Delete a invoice', () => {
    it('should return a invoice deleted', async () => {
      return authenticatedEverestApi
        .deleteInvoice({
          id: invoice_id,
        })
        .then((res) => {
          expect(res.success).toBe(true);
        });
    });

    it('should return a failed invoice deletion with wrong id', async () => {
      return authenticatedEverestApi
        .deleteInvoice({
          id: -1,
        })
        .then((res) => {
          expect(res).toHaveProperty('error');
        });
    });
  });
});
