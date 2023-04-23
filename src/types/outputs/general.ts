import {
  IEverestAreaOfService,
  IEverestPlatform,
  IEverestService,
  IEverestServiceAvailability,
  IEverestVehicleType,
} from '../models';

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

/**
 *
 * @export
 * @interface IEverestServicesResponse
 */
export interface IEverestServicesResponse {
  /**
   *
   * @type {string}
   * @memberof IEverestServicesResponse
   */
  success: boolean;
  /**
   *
   * @type {IEverestService[]}
   * @memberof IEverestServicesResponse
   */
  services: IEverestService[];
}

/**
 *
 * @export
 * @interface IEverestVehicleTypesResponse
 */
export interface IEverestVehicleTypesResponse {
  /**
   *
   * @type {string}
   * @memberof IEverestVehicleTypesResponse
   */
  success: boolean;
  /**
   *
   * @type {IEverestVehicleType[]}
   * @memberof IEverestVehicleTypesResponse
   */
  vehicle_types: IEverestVehicleType[];
}

/**
 *
 * @export
 * @interface IEverestAreasOfServiceResponse
 */
export interface IEverestAreasOfServiceResponse {
  /**
   *
   * @type {string}
   * @memberof IEverestAreasOfServiceResponse
   */
  success: boolean;
  /**
   *
   * @type {IEverestAreaOfService[]}
   * @memberof IEverestAreasOfServiceResponse
   */
  areas_of_service: IEverestAreaOfService[];
}
