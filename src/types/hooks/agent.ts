import { HookEnum } from '../enums';

export interface IEverestAgentCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentCreatedHook
   */
  event: HookEnum.agent_created;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  billing_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  billing_address: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  siret: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentCreatedHook
   */
  vat_number: string;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  price_min: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  price_max: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  vat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  lng: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  available: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentCreatedHook
   */
  date_created: number;

  /**
   *
   * @type {boolean}
   * @memberof IEverestAgentCreatedHook
   */
  self_billing: boolean;

  /**
   *
   * @type {boolean}
   * @memberof IEverestAgentCreatedHook
   */
  is_provider: boolean;
}

export interface IEverestAgentUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentUpdatedHook
   */
  event: HookEnum.agent_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  billing_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  billing_address: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  siret: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentUpdatedHook
   */
  vat_number: string;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  price_min: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  price_max: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  vat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  lng: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  available: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  date_last_login: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentUpdatedHook
   */
  date_modified: number;

  /**
   *
   * @type {boolean}
   * @memberof IEverestAgentUpdatedHook
   */
  self_billing: boolean;

  /**
   *
   * @type {boolean}
   * @memberof IEverestAgentUpdatedHook
   */
  is_provider: boolean;
}

export interface IEverestAgentLocationUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  event: HookEnum.agent_location_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  billing_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  billing_address: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  siret: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  vat_number: string;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  price_min: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  price_max: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  vat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  lng: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  available: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  date_last_login: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  date_modified: number;

  /**
   *
   * @type {boolean}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  self_billing: boolean;

  /**
   *
   * @type {boolean}
   * @memberof IEverestAgentLocationUpdatedHook
   */
  is_provider: boolean;
}

export interface IEverestAgentDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentDeletedHook
   */
  event: HookEnum.agent_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentDeletedHook
   */
  agent_id: number;
}

export interface IEverestAgentFileCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentFileCreatedHook
   */
  event: HookEnum.agent_file_created;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  agent_file_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentFileCreatedHook
   */
  file_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentFileCreatedHook
   */
  file_uri: string;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  date_created: number;
}

export interface IEverestAgentFileUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentFileUpdatedHook
   */
  event: HookEnum.agent_file_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  agent_file_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentFileCreatedHook
   */
  file_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestAgentFileCreatedHook
   */
  file_uri: string;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  date_modified: number;
}

export interface IEverestAgentFileDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAgentDeletedHook
   */
  event: HookEnum.agent_file_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestAgentFileCreatedHook
   */
  agent_file_id: number;
}
