import { ClientStatusEnum } from '../enums';
import { IEverestClientCustomInfos } from '../models';

/**
 *
 * @export
 * @interface IEverestGetClientInput
 */
export interface IEverestGetClientInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetClientInput
   */
  id: number;
}

/**
 *
 * @export
 * @interface IEverestGetClientsInput
 */
export interface IEverestGetClientsInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetClientsInput
   */
  limit_start?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetClientsInput
   */
  limit_end?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestGetClientsInput
   */
  search?: string;
}

/**
 *
 * @export
 * @interface IEverestCreateClientInput
 */
export interface IEverestCreateClientInput {
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  first_name: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  last_name: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  tel: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  internal_code?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  accounting_code?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  address_line1?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  address_line2?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  billing_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  billing_address?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  billing_complementary?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  fuel_surcharge?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  password_repeat: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  photo?: string;
  /**
   *
   * @type {boolean}
   * @memberof IEverestCreateClientInput
   */
  is_periodic_invoiced?: boolean;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateClientInput
   */
  invoice_period?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateClientInput
   */
  invoice_period_extra?: number;
  /**
   *
   * @type {Array<IEverestClientCustomInfos>}
   * @memberof IEverestCreateClientInput
   */
  custom_infos?: IEverestClientCustomInfos[];
  /**
   *
   * @type {ClientStatusEnum}
   * @memberof IEverestCreateClientInput
   */
  status?: ClientStatusEnum;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateClientInput
   */
  establishment_id?: number;
}

/**
 *
 * @export
 * @interface IEverestUpdateClientInput
 */
export interface IEverestUpdateClientInput {
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateClientInput
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  first_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  last_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  internal_code?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  accounting_code?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  address_line1?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  address_line2?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  billing_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  billing_address?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  billing_complementary?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  fuel_surcharge?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  password?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  password_repeat?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  photo?: string;
  /**
   *
   * @type {boolean}
   * @memberof IEverestUpdateClientInput
   */
  is_periodic_invoiced?: boolean;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateClientInput
   */
  invoice_period?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateClientInput
   */
  invoice_period_extra?: number;
  /**
   *
   * @type {Array<IEverestClientCustomInfos>}
   * @memberof IEverestUpdateClientInput
   */
  custom_infos?: IEverestClientCustomInfos[];
  /**
   *
   * @type {ClientStatusEnum}
   * @memberof IEverestUpdateClientInput
   */
  status?: ClientStatusEnum;
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateClientInput
   */
  establishment_id?: number;
}

/**
 *
 * @export
 * @interface IEverestDeleteClientInput
 */
export interface IEverestDeleteClientInput {
  /**
   *
   * @type {number}
   * @memberof IEverestDeleteClientInput
   */
  id: number;
}
