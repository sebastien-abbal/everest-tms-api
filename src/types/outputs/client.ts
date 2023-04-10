import { IEverestClient } from '../models';

/**
 *
 * @export
 * @interface IEverestClientResponse
 */
export interface IEverestClientResponse {
  /**
   *
   * @type {IEverestClient}
   * @memberof IEverestClientResponse
   */
  client: IEverestClient;
  /**
   *
   * @type {string}
   * @memberof IEverestClientResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestClientsResponse
 */
export interface IEverestClientsResponse {
  /**
   *
   * @type {Array<IEverestClient>}
   * @memberof IEverestClientsResponse
   */
  clients: IEverestClient[];
  /**
   *
   * @type {string}
   * @memberof IEverestClientsResponse
   */
  success: boolean;
}
