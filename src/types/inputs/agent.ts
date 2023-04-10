import { AgentStatusEnum } from '../enums';

/**
 *
 * @export
 * @interface IEverestGetAgentInput
 */
export interface IEverestGetAgentInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetAgentInput
   */
  id: number;
}

/**
 *
 * @export
 * @interface IEverestGetAgentsInput
 */
export interface IEverestGetAgentsInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetAgentsInput
   */
  limit_start?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetAgentsInput
   */
  limit_end?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestGetAgentsInput
   */
  search?: string;
}

/**
 *
 * @export
 * @interface IEverestCreateAgentInput
 */
export interface IEverestCreateAgentInput {
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  first_name: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  last_name: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  address_line1: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  address_line2?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  billing_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  billing_address?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  company_number?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  price_min?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  price_max?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  dist_max?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  lat?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  lng?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  password_repeat: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  photo?: string;
  /**
   *
   * @type {boolean}
   * @memberof IEverestCreateAgentInput
   */
  available?: boolean;
  /**
   *
   * @type {AgentStatusEnum}
   * @memberof IEverestCreateAgentInput
   */
  status?: AgentStatusEnum;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  establishment_id?: number;
}

/**
 *
 * @export
 * @interface IEverestUpdateAgentInput
 */
export interface IEverestUpdateAgentInput {
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateAgentInput
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  first_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  last_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  address_line1?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  address_line2?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  billing_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  billing_address?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  company_number?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  price_min?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  price_max?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  dist_max?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  lat?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  lng?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  password?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  password_repeat?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateAgentInput
   */
  photo?: string;
  /**
   *
   * @type {boolean}
   * @memberof IEverestCreateAgentInput
   */
  available?: boolean;
  /**
   *
   * @type {AgentStatusEnum}
   * @memberof IEverestCreateAgentInput
   */
  status?: AgentStatusEnum;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateAgentInput
   */
  establishment_id?: number;
}

/**
 *
 * @export
 * @interface IEverestDeleteAgentInput
 */
export interface IEverestDeleteAgentInput {
  /**
   *
   * @type {number}
   * @memberof IEverestDeleteAgentInput
   */
  id: number;
}

/**
 *
 * @export
 * @interface IEverestGeolocAgentInput
 */
export interface IEverestGeolocAgentInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGeolocAgentInput
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestGeolocAgentInput
   */
  lat: string;
  /**
   *
   * @type {string}
   * @memberof IEverestGeolocAgentInput
   */
  lng: string;
}
