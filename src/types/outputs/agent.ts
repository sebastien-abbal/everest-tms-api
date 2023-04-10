import { IEverestAgent } from '../models';

/**
 *
 * @export
 * @interface IEverestAgentResponse
 */
export interface IEverestAgentResponse {
  /**
   *
   * @type {IEverestAgent}
   * @memberof IEverestAgentResponse
   */
  agent: IEverestAgent;
  /**
   *
   * @type {string}
   * @memberof IEverestAgentResponse
   */
  success: boolean;
}

/**
 *
 * @export
 * @interface IEverestAgentsResponse
 */
export interface IEverestAgentsResponse {
  /**
   *
   * @type {Array<IEverestAgent>}
   * @memberof IEverestAgentsResponse
   */
  agents: IEverestAgent[];
  /**
   *
   * @type {string}
   * @memberof IEverestAgentsResponse
   */
  success: boolean;
}
