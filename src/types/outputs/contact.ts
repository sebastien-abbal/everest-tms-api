import { IEverestContact } from '../models';

/**
 *
 * @export
 * @interface IEverestContactResponse
 */
export interface IEverestContactResponse {
  /**
   *
   * @type {IEverestContact}
   * @memberof IEverestContactResponse
   */
  contact: IEverestContact;
  /**
   *
   * @type {string}
   * @memberof IEverestContactResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestContactsResponse
 */
export interface IEverestContactsResponse {
  /**
   *
   * @type {Array<IEverestContact>}
   * @memberof IEverestContactsResponse
   */
  contacts: IEverestContact[];
  /**
   *
   * @type {string}
   * @memberof IEverestContactsResponse
   */
  success: boolean;
}
