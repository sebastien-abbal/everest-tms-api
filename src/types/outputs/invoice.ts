import { IEverestInvoice } from '../models';

/**
 *
 * @export
 * @interface IEverestInvoiceResponse
 */
export interface IEverestInvoiceResponse {
  /**
   *
   * @type {IEverestInvoice}
   * @memberof IEverestInvoiceResponse
   */
  invoice: IEverestInvoice;
  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestInvoicesResponse
 */
export interface IEverestInvoicesResponse {
  /**
   *
   * @type {Array<IEverestInvoice>}
   * @memberof IEverestInvoicesResponse
   */
  invoices: IEverestInvoice[];
  /**
   *
   * @type {string}
   * @memberof IEverestInvoicesResponse
   */
  success: boolean;
}
