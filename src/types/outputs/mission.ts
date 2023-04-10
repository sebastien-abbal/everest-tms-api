import { IEverestMission, IEverestStatus } from '../models';

/**
 *
 * @export
 * @interface IEverestMissionResponse
 */
export interface IEverestMissionResponse {
  /**
   *
   * @type {IEverestMission}
   * @memberof IEverestMissionResponse
   */
  mission: IEverestMission;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestMissionsResponse
 */
export interface IEverestMissionsResponse {
  /**
   *
   * @type {Array<IEverestMission>}
   * @memberof IEverestMissionsResponse
   */
  missions: IEverestMission[];
  /**
   *
   * @type {string}
   * @memberof IEverestMissionsResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestStatusesResponse
 */
export interface IEverestStatusesResponse {
  /**
   *
   * @type {{ [key: string]: IEverestStatus }}
   * @memberof IEverestStatusesResponse
   */
  statuses: { [key: string]: IEverestStatus };
  /**
   *
   * @type {string}
   * @memberof IEverestStatusesResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestEstimateMissionResponse
 */
export interface IEverestEstimateMissionResponse {
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionResponse
   */
  price_excl: number;
  /**
   *
   * @type {string}
   * @memberof IEverestEstimateMissionResponse
   */
  price_excl_formatted: string;
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionResponse
   */
  price_incl: number;
  /**
   *
   * @type {string}
   * @memberof IEverestEstimateMissionResponse
   */
  price_incl_formatted: string;
}
