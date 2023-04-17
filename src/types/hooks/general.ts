import { HookEnum } from '../enums';

export interface IEverestBackEndAuthHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestBackEndAuthHook
   */
  event: HookEnum.backend_auth;

  /**
   *
   * @type {number}
   * @memberof IEverestBackEndAuthHook
   */
  user_id: number;
}

export interface IEverestSupportEmailSentHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestSupportEmailSentHook
   */
  event: HookEnum.support_email_sent;
}

export interface IEverestUserCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestUserCreatedHook
   */
  event: HookEnum.user_created;

  /**
   *
   * @type {number}
   * @memberof IEverestUserCreatedHook
   */
  user_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestUserCreatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserCreatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserCreatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserCreatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserCreatedHook
   */
  email: string;

  /**
   *
   * @type {number}
   * @memberof IEverestUserCreatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestUserCreatedHook
   */
  date_created: number;
}

export interface IEverestUserUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestUserUpdatedHook
   */
  event: HookEnum.user_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestUserUpdatedHook
   */
  user_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestUserUpdatedHook
   */
  first_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserUpdatedHook
   */
  last_name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserUpdatedHook
   */
  photo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserUpdatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestUserUpdatedHook
   */
  email: string;

  /**
   *
   * @type {number}
   * @memberof IEverestUserUpdatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestUserUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestUserUpdatedHook
   */
  date_last_login: number;

  /**
   *
   * @type {number}
   * @memberof IEverestUserUpdatedHook
   */
  date_modified: number;
}

export interface IEverestUserDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestUserDeletedHook
   */
  event: HookEnum.user_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestUserDeletedHook
   */
  user_id: number;
}

export interface IEverestServiceCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestServiceCreatedHook
   */
  event: HookEnum.service_created;

  /**
   *
   * @type {number}
   * @memberof IEverestServiceCreatedHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestServiceCreatedHook
   */
  name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestServiceCreatedHook
   */
  description: string;

  /**
   *
   * @type {string}
   * @memberof IEverestServiceCreatedHook
   */
  icon: string;

  /**
   *
   * @type {number}
   * @memberof IEverestServiceCreatedHook
   */
  vat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestServiceCreatedHook
   */
  delay: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestServiceCreatedHook
   */
  additionals: string[];
}

export interface IEverestServiceUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestServiceUpdatedHook
   */
  event: HookEnum.service_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestServiceUpdatedHook
   */
  service_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestServiceUpdatedHook
   */
  name: string;

  /**
   *
   * @type {string}
   * @memberof IEverestServiceUpdatedHook
   */
  description: string;

  /**
   *
   * @type {string}
   * @memberof IEverestServiceUpdatedHook
   */
  icon: string;

  /**
   *
   * @type {number}
   * @memberof IEverestServiceUpdatedHook
   */
  vat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestServiceUpdatedHook
   */
  delay: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestServiceUpdatedHook
   */
  additionals: string[];
}

export interface IEverestStatusCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestStatusCreatedHook
   */
  event: HookEnum.status_created;

  /**
   *
   * @type {string}
   * @memberof IEverestStatusCreatedHook
   */
  status_slug: string;
}

export interface IEverestStatusUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestStatusUpdatedHook
   */
  event: HookEnum.status_updated;

  /**
   *
   * @type {string}
   * @memberof IEverestStatusUpdatedHook
   */
  status_slug: string;
}

export interface IEverestVehicleCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestVehicleCreatedHook
   */
  event: HookEnum.vehicle_created;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleCreatedHook
   */
  vehicle_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleCreatedHook
   */
  engine: number;

  /**
   *
   * @type {string}
   * @memberof IEverestVehicleCreatedHook
   */
  engine_name: string;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleCreatedHook
   */
  vehicle: number;

  /**
   *
   * @type {string}
   * @memberof IEverestVehicleCreatedHook
   */
  vehicle_name: string;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleCreatedHook
   */
  volume: number;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleCreatedHook
   */
  max_weight: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestVehicleCreatedHook
   */
  additionals: string[];
}

export interface IEverestVehicleUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestVehicleUpdatedHook
   */
  event: HookEnum.vehicle_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleUpdatedHook
   */
  vehicle_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleUpdatedHook
   */
  engine: number;

  /**
   *
   * @type {string}
   * @memberof IEverestVehicleUpdatedHook
   */
  engine_name: string;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleUpdatedHook
   */
  vehicle: number;

  /**
   *
   * @type {string}
   * @memberof IEverestVehicleUpdatedHook
   */
  vehicle_name: string;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleUpdatedHook
   */
  volume: number;

  /**
   *
   * @type {number}
   * @memberof IEverestVehicleUpdatedHook
   */
  max_weight: number;

  /**
   *
   * @type {string[]}
   * @memberof IEverestVehicleUpdatedHook
   */
  additionals: string[];
}

export interface IEverestPlatformGlobalSettingsUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestPlatformGlobalSettingsUpdatedHook
   */
  event: HookEnum.platform_global_settings_updated;
}

export interface IEverestPlatformInvoicingUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestPlatformInvoicingUpdatedHook
   */
  event: HookEnum.platform_invoicing_updated;
}

export interface IEverestAreaOfServiceCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAreaOfServiceCreatedHook
   */
  event: HookEnum.area_of_service_created;
}

export interface IEverestAreaOfServiceUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAreaOfServiceUpdatedHook
   */
  event: HookEnum.area_of_service_updated;
}

export interface IEverestTariffPoliticUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestTariffPoliticUpdatedHook
   */
  event: HookEnum.tariff_politic_updated;
}

export interface IEverestDispatchRulesUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestDispatchRulesUpdatedHook
   */
  event: HookEnum.dispatch_rules_updated;
}

export interface IEverestRoleCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestRoleCreatedHook
   */
  event: HookEnum.role_created;

  /**
   *
   * @type {number}
   * @memberof IEverestRoleCreatedHook
   */
  role_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestRoleCreatedHook
   */
  name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestRoleCreatedHook
   */
  permissions: string[];
}

export interface IEverestRoleUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestRoleUpdatedHook
   */
  event: HookEnum.role_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestRoleUpdatedHook
   */
  role_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestRoleUpdatedHook
   */
  name: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestRoleUpdatedHook
   */
  permissions: string[];
}

export interface IEverestAvailabilitiesUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestAvailabilitiesUpdatedHook
   */
  event: HookEnum.availabilities_updated;
}

export interface IEverestEstablishmentCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestEstablishmentCreatedHook
   */
  event: HookEnum.establishment_created;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  title: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  address_country: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  logo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentCreatedHook
   */
  email: string;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentCreatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentCreatedHook
   */
  address_lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentCreatedHook
   */
  address_lng: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentCreatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentCreatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentCreatedHook
   */
  date_inactive: number;
}

export interface IEverestEstablishmentUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  event: HookEnum.establishment_updated;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  title: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  address_line1: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  address_line2: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  address_country: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  logo: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  tel: string;

  /**
   *
   * @type {string}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  email: string;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  establishment_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  address_lat: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  address_lng: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  status: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  date_inactive: number;

  /**
   *
   * @type {number}
   * @memberof IEverestEstablishmentUpdatedHook
   */
  date_modified: number;
}

export interface IEverestRoleDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestRoleDeletedHook
   */
  event: HookEnum.establishment_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestRoleDeletedHook
   */
  establishment_id: number;
}

export interface IEverestFormCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestFormCreatedHook
   */
  event: HookEnum.form_created;
}

export interface IEverestFormUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestFormUpdatedHook
   */
  event: HookEnum.form_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestFormUpdatedHook
   */
  form_id: number;
}
