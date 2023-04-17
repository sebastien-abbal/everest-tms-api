import { HookEnum } from '../enums';
import { IEverestMissionMedia } from '../models';

export interface IEverestMissionCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionCreatedHook
   */
  event: HookEnum.mission_created;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  ref: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  type: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  start_date: number;

  /**
   *
   * @type {boolean}
   * @memberof IEverestMissionCreatedHook
   */
  requires_return: boolean;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_start: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_start_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_start_tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_start_comment: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_start_email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_end: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_end_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_end_tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_end_comment: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  address_end_email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCreatedHook
   */
  comment: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  weight: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  volume: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  price_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  price_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  agent_price_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  agent_price_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  service_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  agent_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  client_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  status: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionCreatedHook
   */
  status_extras: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionCreatedHook
   */
  additionals: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCreatedHook
   */
  date_created: number;
}

export interface IEverestMissionUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionUpdatedHook
   */
  event: HookEnum.mission_updated;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  ref: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  type: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  start_date: number;

  /**
   *
   * @type {boolean}
   * @memberof IEverestMissionUpdatedHook
   */
  requires_return: boolean;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_start: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_start_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_start_tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_start_comment: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_start_email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_end: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_end_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_end_tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_end_comment: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  address_end_email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionUpdatedHook
   */
  comment: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  weight: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  volume: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  price_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  price_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  agent_price_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  agent_price_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  service_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  agent_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  client_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  status: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionUpdatedHook
   */
  status_extras: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionUpdatedHook
   */
  additionals: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  client_note: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  date_modified: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionUpdatedHook
   */
  date_noted: number;
}

export interface IEverestMissionPriceUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  event: HookEnum.mission_price_updated;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  ref: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  type: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  start_date: number;

  /**
   *
   * @type {boolean}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  requires_return: boolean;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_start: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_start_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_start_tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_start_comment: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_start_email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_end: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_end_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_end_tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_end_comment: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  address_end_email: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  comment: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  weight: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  volume: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  price_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  price_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  agent_price_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  agent_price_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  service_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  agent_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  client_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  status: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  status_extras: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  additionals: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  client_note: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  date_modified: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPriceUpdatedHook
   */
  date_noted: number;
}

export interface IEverestMissionDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionDeletedHook
   */
  event: HookEnum.mission_deleted;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionDeletedHook
   */
  ref: string;
}

export interface IEverestMissionsImportedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionsImportedHook
   */
  event: HookEnum.missions_imported;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionsImportedHook
   */
  count: number;
}

export interface IEverestMissionCommentCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionCommentCreatedHook
   */
  event: HookEnum.comment_created;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCommentCreatedHook
   */
  comment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCommentCreatedHook
   */
  user_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCommentCreatedHook
   */
  mission_ref: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCommentCreatedHook
   */
  comment: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCommentCreatedHook
   */
  date_created: number;
}

export interface IEverestMissionCommentUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionCommentUpdatedHook
   */
  event: HookEnum.comment_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCommentCreatedHook
   */
  comment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCommentCreatedHook
   */
  user_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCommentCreatedHook
   */
  mission_ref: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCommentCreatedHook
   */
  comment: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCommentCreatedHook
   */
  date_created: number;
}

export interface IEverestMissionCancelledHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionCancelledHook
   */
  event: HookEnum.mission_cancelled;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCancelledHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCancelledHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCancelledHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCancelledHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCancelledHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionCancelledHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCancelledHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCancelledHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCancelledHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionCancelledHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionCancelledHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionCancelledHook
   */
  extras: string[];
}

export interface IEverestMissionFinishedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionFinishedHook
   */
  event: HookEnum.mission_finished;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFinishedHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFinishedHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFinishedHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFinishedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFinishedHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionFinishedHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFinishedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFinishedHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFinishedHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFinishedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFinishedHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionFinishedHook
   */
  extras: string[];
}

export interface IEverestMissionFailedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionFailedHook
   */
  event: HookEnum.mission_failed;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFailedHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFailedHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFailedHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFailedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFailedHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionFailedHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFailedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFailedHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFailedHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionFailedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionFailedHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionFailedHook
   */
  extras: string[];
}

export interface IEverestMissionSuccessHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionSuccessHook
   */
  event: HookEnum.mission_success;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionSuccessHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionSuccessHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionSuccessHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionSuccessHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionSuccessHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionSuccessHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionSuccessHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionSuccessHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionSuccessHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionSuccessHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionSuccessHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionSuccessHook
   */
  extras: string[];
}

export interface IEverestMissionDispatchedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionDispatchedHook
   */
  event: HookEnum.mission_dispatched;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionDispatchedHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionDispatchedHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionDispatchedHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionDispatchedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionDispatchedHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionDispatchedHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionDispatchedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionDispatchedHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionDispatchedHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionDispatchedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionDispatchedHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionDispatchedHook
   */
  extras: string[];
}

export interface IEverestMissionPickedUpHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionPickedUpHook
   */
  event: HookEnum.mission_pickedup;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPickedUpHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPickedUpHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPickedUpHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPickedUpHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPickedUpHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionPickedUpHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPickedUpHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPickedUpHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPickedUpHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionPickedUpHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionPickedUpHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionPickedUpHook
   */
  extras: string[];
}

export interface IEverestMissionStatusChangedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionStatusChangedHook
   */
  event: HookEnum.mission_status;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionStatusChangedHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionStatusChangedHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionStatusChangedHook
   */
  status_slug: string;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionStatusChangedHook
   */
  client_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionStatusChangedHook
   */
  status: number;

  /**
   *
   * @type {IEverestMissionMedia[]}
   * @memberof IEverestMissionStatusChangedHook
   */
  medias: IEverestMissionMedia[];

  /**
   *
   * @type {number}
   * @memberof IEverestMissionStatusChangedHook
   */
  lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionStatusChangedHook
   */
  lon: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionStatusChangedHook
   */
  date: number;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionStatusChangedHook
   */
  agent_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionStatusChangedHook
   */
  agent_name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestMissionStatusChangedHook
   */
  extras: string[];
}

export interface IEverestMissionRescheduledHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestMissionRescheduledHook
   */
  event: HookEnum.mission_rescheduled;

  /**
   *
   * @type {string}
   * @memberof IEverestMissionRescheduledHook
   */
  mission_ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestMissionRescheduledHook
   */
  start_date: number;
}
