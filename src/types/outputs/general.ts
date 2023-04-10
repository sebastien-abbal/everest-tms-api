import { IEverestPlatform, IEverestServiceAvailability } from '../models';

/**
 *
 * @export
 * @interface IEverestDefaultResponse
 */
export interface IEverestDefaultResponse {
  /**
   *
   * @type {string}
   * @memberof IEverestDefaultResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestAuthenticateResponse
 */
export interface IEverestAuthenticateResponse {
  /**
   * Authentication token
   * @type {string}
   * @memberof IEverestAuthenticateResponse
   */
  token: string;
}

/**
 *
 * @export
 * @interface IEverestInfosResponse
 */
export interface IEverestInfosResponse {
  /**
   *
   * @type {string}
   * @memberof IEverestInfosResponse
   */
  success: boolean;
  /**
   *
   * @type {IEverestPlatform}
   * @memberof IEverestInfosResponse
   */
  platform: IEverestPlatform;
}

/**
 *
 * @export
 * @interface IEverestAvailabilitiesResponse
 */
export interface IEverestAvailabilitiesResponse {
  /**
   *
   * @type {string}
   * @memberof IEverestAvailabilitiesResponse
   */
  success: boolean;
  /**
   *
   * @type {IEverestPlatform}
   * @memberof IEverestInfosResponse
   */
  availabilities: {
    slot_step: number;
  } & {
    [key: string]: IEverestServiceAvailability;
  };
}
