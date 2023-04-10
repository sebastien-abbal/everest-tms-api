import {
  InvoiceStatusnEnum,
  InvoiceTypeEnum,
  InvoiceValidationEnum,
} from '../enums';

/**
 *
 * @export
 * @interface IEverestGetInvoiceInput
 */
export interface IEverestGetInvoiceInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetInvoiceInput
   */
  id: number;
}

/**
 *
 * @export
 * @interface IEverestGetInvoicesInput
 */
export interface IEverestGetInvoicesInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetInvoicesInput
   */
  limit_start?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetInvoicesInput
   */
  limit_end?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestGetInvoicesInput
   */
  search?: string;
}

/**
 *
 * @export
 * @interface IEverestCreateInvoiceInput
 */
export interface IEverestCreateInvoiceInput {
  /**
   *
   * @type {InvoiceTypeEnum}
   * @memberof IEverestCreateInvoiceInput
   */
  type: InvoiceTypeEnum;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  name_or_company: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  address: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateInvoiceInput
   */
  amount_excl: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateInvoiceInput
   */
  amount_incl: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateInvoiceInput
   */
  created_for: number;
  /**
   * client:<ID>
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  created_by?: string;
  /**
   *
   * @type {InvoiceValidationEnum}
   * @memberof IEverestCreateInvoiceInput
   */
  validated?: InvoiceValidationEnum;
  /**
   *
   * @type {InvoiceStatusnEnum}
   * @memberof IEverestCreateInvoiceInput
   */
  status?: InvoiceStatusnEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestCreateInvoiceInput
   */
  missions?: string[];
  /**
   *
   * @type {Date}
   * @memberof IEverestCreateInvoiceInput
   */
  date_paid?: Date;
}

/**
 *
 * @export
 * @interface IEverestUpdateInvoiceInput
 */
export interface IEverestUpdateInvoiceInput {
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateInvoiceInput
   */
  id: number;
  /**
   *
   * @type {InvoiceTypeEnum}
   * @memberof IEverestCreateInvoiceInput
   */
  type?: InvoiceTypeEnum;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  name_or_company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  address?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateInvoiceInput
   */
  amount_excl?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateInvoiceInput
   */
  amount_incl?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  created_for?: string;
  /**
   * client:<ID>
   * @type {string}
   * @memberof IEverestCreateInvoiceInput
   */
  created_by?: string;
  /**
   *
   * @type {InvoiceValidationEnum}
   * @memberof IEverestCreateInvoiceInput
   */
  validated?: InvoiceValidationEnum;
  /**
   *
   * @type {InvoiceStatusnEnum}
   * @memberof IEverestCreateInvoiceInput
   */
  status?: InvoiceStatusnEnum;
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestCreateInvoiceInput
   */
  missions?: string[];
  /**
   *
   * @type {Date}
   * @memberof IEverestCreateInvoiceInput
   */
  date_paid?: Date;
}

/**
 *
 * @export
 * @interface IEverestDeleteInvoiceInput
 */
export interface IEverestDeleteInvoiceInput {
  /**
   *
   * @type {number}
   * @memberof IEverestDeleteInvoiceInput
   */
  id: number;
}
