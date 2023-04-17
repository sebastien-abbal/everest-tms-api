import { HookEnum } from '../enums';

export interface IEverestClientCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestClientCreatedHook
   */
  event: HookEnum.client_created;

  /**
   *
   * @type {number}
   * @memberof IEverestClientCreatedHook
   */
  client_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  billing_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientCreatedHook
   */
  billing_address: string;

  /**
   *
   * @type {number}
   * @memberof IEverestClientCreatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestClientCreatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestClientCreatedHook
   */
  date_created: number;
}

export interface IEverestClientUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestClientUpdatedHook
   */
  event: HookEnum.client_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestClientUpdatedHook
   */
  client_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  billing_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestClientUpdatedHook
   */
  billing_address: string;

  /**
   *
   * @type {number}
   * @memberof IEverestClientUpdatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestClientUpdatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestClientUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestClientUpdatedHook
   */
  date_last_login: number;

  /**
   *
   * @type {number}
   * @memberof IEverestClientUpdatedHook
   */
  date_modified: number;
}

export interface IEverestClientDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestClientDeletedHook
   */
  event: HookEnum.client_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestClientDeletedHook
   */
  client_id: number;
}

export interface IEverestClientTariffsUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestClientTariffsUpdatedHook
   */
  event: HookEnum.client_tariffs_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestClientTariffsUpdatedHook
   */
  client_id: number;
}

export interface IEverestClientApiUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestClientApiUpdatedHook
   */
  event: HookEnum.client_api_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestClientApiUpdatedHook
   */
  client_id: number;
}
