import { EverestMissionStatusEnum, OrderByEnum } from '../enums';
import {
  IEverestMission,
  IEverestMissionCustomInfos,
  IEverestMissionFiles,
  IEverestMissionPackages,
} from '../models';

/**
 *
 * @export
 * @interface IEverestGetMissionInput
 */
export interface IEverestGetMissionInput {
  /**
   *
   * @type {string}
   * @memberof IEverestGetMissionInput
   */
  ref: string;
}

/**
 *
 * @export
 * @interface IEverestGetMissionsInput
 */
export interface IEverestGetMissionsInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetMissionsInput
   */
  agent?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetMissionsInput
   */
  service?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetMissionsInput
   */
  limit_start?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetMissionsInput
   */
  limit_end?: number;
  /**
   *
   * @type {Date}
   * @memberof IEverestGetMissionsInput
   */
  date_between_start?: Date;
  /**
   *
   * @type {Date}
   * @memberof IEverestGetMissionsInput
   */
  date_between_end?: Date;
  /**
   *
   * @type {string}
   * @memberof IEverestGetMissionsInput
   */
  search?: string;
  /**
   * Order by Mission model property (ex: start_date)
   * @type {string}
   * @memberof IEverestGetMissionsInput
   */
  order_by?: keyof IEverestMission;
  /**
   *
   * @type {OrderByEnum}
   * @memberof IEverestGetMissionsInput
   */
  order_by_order?: OrderByEnum;
}

/**
 *
 * @export
 * @interface IEverestCreateMissionInput
 */
export interface IEverestCreateMissionInput {
  /**
   *
   * @type {Date}
   * @memberof IEverestCreateMissionInput
   */
  start_date?: Date;
  /**
   * Check if start_date is in platform defined availabilities of service
   * @type {boolean}
   * @memberof IEverestCreateMissionInput
   */
  check_date?: boolean;
  /**
   * Check if addresses are in areas of service
   * @type {boolean}
   * @memberof IEverestCreateMissionInput
   */
  check_addresses?: boolean;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  comment?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateMissionInput
   */
  service_id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  agent_id?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  client_id?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  client_ref?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateMissionInput
   */
  price_excl?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateMissionInput
   */
  agent_price_excl?: number;
  /**
   *
   * @type {EverestMissionStatusEnum}
   * @memberof IEverestCreateMissionInput
   */
  status?: EverestMissionStatusEnum;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_start: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_start_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_start_company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_start_email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_start_comment?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_start_tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_end: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_end_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_end_company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_end_email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_end_comment?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  address_end_tel?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestCreateMissionInput
   */
  additionals?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateMissionInput
   */
  establishment_id?: string;
  /**
   *
   * @type {MissionFiles[]}
   * @memberof IEverestCreateMissionInput
   */
  files?: IEverestMissionFiles[];
  /**
   *
   * @type {MissionCustomInfos[]}
   * @memberof IEverestCreateMissionInput
   */
  custom_infos?: IEverestMissionCustomInfos[];
  /**
   *
   * @type {MissionPackages[]}
   * @memberof IEverestCreateMissionInput
   */
  packages?: IEverestMissionPackages[];
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestCreateMissionInput[]
   */
  skills?: Array<string>;
}

/**
 *
 * @export
 * @interface IEverestUpdateMissionInput
 */
export interface IEverestUpdateMissionInput {
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  ref: string;
  /**
   *
   * @type {Date}
   * @memberof IEverestUpdateMissionInput
   */
  start_date?: Date;
  /**
   * Check if start_date is in platform defined availabilities of service
   * @type {boolean}
   * @memberof IEverestUpdateMissionInput
   */
  check_date?: boolean;
  /**
   * Check if addresses are in areas of service
   * @type {boolean}
   * @memberof IEverestUpdateMissionInput
   */
  check_addresses?: boolean;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  comment?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateMissionInput
   */
  service_id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  agent_id?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  client_id?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  client_ref?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateMissionInput
   */
  price_excl?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateMissionInput
   */
  agent_price_excl?: number;
  /**
   *
   * @type {EverestMissionStatusEnum}
   * @memberof IEverestUpdateMissionInput
   */
  status?: EverestMissionStatusEnum;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_start?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_start_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_start_company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_start_email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_start_comment?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_start_tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_end?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_end_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_end_company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_end_email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_end_comment?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  address_end_tel?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestUpdateMissionInput
   */
  additionals?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionInput
   */
  establishment_id?: string;
  /**
   *
   * @type {MissionFiles[]}
   * @memberof IEverestUpdateMissionInput
   */
  files?: IEverestMissionFiles[];
  /**
   *
   * @type {MissionCustomInfos[]}
   * @memberof IEverestUpdateMissionInput
   */
  custom_infos?: IEverestMissionCustomInfos[];
  /**
   *
   * @type {MissionPackages[]}
   * @memberof IEverestUpdateMissionInput
   */
  packages?: IEverestMissionPackages[];
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestUpdateMissionInput[]
   */
  skills?: Array<string>;
}

/**
 *
 * @export
 * @interface IEverestDeleteMissionInput
 */
export interface IEverestDeleteMissionInput {
  /**
   *
   * @type {string}
   * @memberof IEverestDeleteMissionInput
   */
  ref: string;
}

/**
 *
 * @export
 * @interface IEverestCancelMissionInput
 */
export interface IEverestCancelMissionInput {
  /**
   *
   * @type {string}
   * @memberof IEverestCancelMissionInput
   */
  ref: string;
}

/**
 *
 * @export
 * @interface IEverestUpdateMissionStatusInput
 */
export interface IEverestUpdateMissionStatusInput {
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionStatusInput
   */
  ref: string;
  /**
   *
   * @type {EverestMissionStatusEnum}
   * @memberof IEverestUpdateMissionStatusInput
   */
  status: EverestMissionStatusEnum;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionStatusInput
   */
  comment?: string;
  /**
   * Media in base64 format (ex: "data:image/png;base64,XXXXXXXXXXXX")
   * @type {string}
   * @memberof IEverestUpdateMissionStatusInput
   */
  signature?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionStatusInput
   */
  lat?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateMissionStatusInput
   */
  lng?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestUpdateMissionStatusInput
   */
  extras?: Array<string>;
  /**
   * List of photos in base64 format instead of src url (ex: "data:image/jpg;base64,XXXXXXXXXXXX")
   * @type {Array<string>}
   * @memberof IEverestUpdateMissionStatusInput
   */
  photos?: Array<string>;
  /**
   * List of photos URL instead of base64 (ex: "https://.../photo1.png")
   * @type {Array<string>}
   * @memberof IEverestUpdateMissionStatusInput
   */
  photos_src?: Array<string>;
}

/**
 *
 * @export
 * @interface IEverestIsHandledAddressInput
 */
export interface IEverestIsHandledAddressInput {
  /**
   *
   * @type {string}
   * @memberof IEverestIsHandledAddressInput
   */
  address: string;
  /**
   *
   * @type {Date}
   * @memberof IEverestIsHandledAddressInput
   */
  start_date?: Date;
  /**
   *
   * @type {string}
   * @memberof IEverestIsHandledAddressInput
   */
  service_id?: number;
}

/**
 *
 * @export
 * @interface IEverestEstimateMissionInput
 */
export interface IEverestEstimateMissionInput {
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionInput
   */
  service_id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestEstimateMissionInput
   */
  address_start: string;
  /**
   *
   * @type {string}
   * @memberof IEverestEstimateMissionInput
   */
  address_end: string;
  /**
   *
   * @type {Array<string>}
   * @memberof IEverestEstimateMissionInput
   */
  additionals?: Array<string>;
  /**
   *
   * @type {Date}
   * @memberof IEverestEstimateMissionInput
   */
  start_date?: Date;
  /**
   *
   * @type {boolean}
   * @memberof IEverestEstimateMissionInput
   */
  check_date?: boolean;
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionInput
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionInput
   */
  volume?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionInput
   */
  client_id?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestEstimateMissionInput
   */
  establishment_id?: number;
}
