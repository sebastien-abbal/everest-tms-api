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
