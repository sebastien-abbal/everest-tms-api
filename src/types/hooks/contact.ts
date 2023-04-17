import { HookEnum } from '../enums';

export interface IEverestContactCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestContactCreatedHook
   */
  event: HookEnum.contact_created;

  /**
   *
   * @type {number}
   * @memberof IEverestContactCreatedHook
   */
  contact_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  company: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  job: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  category: string;

  /**
   *
   * @type {number}
   * @memberof IEverestContactCreatedHook
   */
  date_created: number;
}

export interface IEverestContactUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestContactUpdatedHook
   */
  event: HookEnum.contact_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestContactCreatedHook
   */
  contact_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  company: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  job: string;

  /**
   *
   * @type {string}
   * @memberof IEverestContactCreatedHook
   */
  category: string;

  /**
   *
   * @type {number}
   * @memberof IEverestContactCreatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestContactUpdatedHook
   */
  date_modified: number;
}

export interface IEverestContactDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestContactDeletedHook
   */
  event: HookEnum.client_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestContactDeletedHook
   */
  contact_id: number;
}
