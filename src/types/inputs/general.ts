/**
 *
 * @export
 * @interface IEverestAuthenticateInput
 */
export interface IEverestAuthenticateInput {
  /**
   * API Client ID (from the admin panel of everest)
   * @type {string}
   * @memberof IEverestAuthenticateInput
   */
  client_id: string;
  /**
   * API Client secret (from the admin panel of everest)
   * @type {string}
   * @memberof IEverestAuthenticateInput
   */
  client_secret: string;
}

/**
 *
 * @export
 * @interface IEverestAvailabilitiesInput
 */
export interface IEverestAvailabilitiesInput {
  /**
   *
   * @type {string}
   * @memberof IEverestAvailabilitiesInput
   */
  establishment_id?: string;
}

/**
 *
 * @export
 * @interface IEverestServicesInput
 */
export interface IEverestServicesInput {
  /**
   *
   * @type {string}
   * @memberof IEverestServicesInput
   */
  establishment_id?: string;
}

/**
 *
 * @export
 * @interface IEverestAreasOfServiceInput
 */
export interface IEverestAreasOfServiceInput {
  /**
   *
   * @type {string}
   * @memberof IEverestAreasOfServiceInput
   */
  establishment_id?: string;
}
