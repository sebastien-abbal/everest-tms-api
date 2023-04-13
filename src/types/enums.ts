export enum EverestRoutesEnum {
  // General
  AUTH = '/auth',
  INFOS = '/infos',
  ME = '/me',
  AVAILABILITIES = '/availabilities',

  // Missions
  IS_HANDLED_ADDRESS = '/is-handled-address',
  GET_MISSION = '/missions/get',
  GET_MISSIONS = '/missions',
  GET_MISSION_STATUSES = '/statuses',
  CREATE_MISSION = '/missions/create',
  UPDATE_MISSION = '/missions/update',
  DELETE_MISSION = '/missions/delete',
  ESTIMATE_MISSION = '/missions/estimate',
  STATUS_MISSION = '/missions/status',
  ACCEPT_MISSION = '/missions/accept',
  CANCEL_MISSION = '/missions/cancel',
  GET_CLIENTS = '/clients',
  GET_CLIENT = '/clients/get',
  CREATE_CLIENT = '/clients/create',
  UPDATE_CLIENT = '/clients/update',
  DELETE_CLIENT = '/clients/delete',
  GET_INVOICES = '/invoices',
  GET_INVOICE = '/invoices/get',
  CREATE_INVOICE = '/invoices/create',
  UPDATE_INVOICE = '/invoices/update',
  DELETE_INVOICE = '/invoices/delete',
  GET_AGENTS = '/agents',
  GET_AGENT = '/agents/get',
  CREATE_AGENT = '/agents/create',
  UPDATE_AGENT = '/agents/update',
  DELETE_AGENT = '/agents/delete',
  GEOLOC_AGENT = '/agents/geoloc',
  GET_CONTACTS = '/contacts',
  GET_CONTACT = '/contacts/get',
  CREATE_CONTACT = '/contacts/create',
  UPDATE_CONTACT = '/contacts/update',
  DELETE_CONTACT = '/contacts/delete',
  CREATE_CONTACT_EVENT = '/contacts/event',
}

export enum EverestMissionStatusEnum {
  supported = 'pris-en-charge',
  canceled = 'annul',
  new = 'nouvelle-mission',
  scanned = 'scann',
  scheduled = 'planifi',
  delivered = 'livr',
  failed = 'echec',
  affected = 'affect',
}

export enum ClientStatusEnum {
  inactive = '0',
  active = '1',
}

export enum AgentStatusEnum {
  inactive = '0',
  active = '1',
}

export enum InvoiceTypeEnum {
  estimate = '0',
  invoice = '1',
}

export enum InvoiceValidationEnum {
  'not-validated' = '0',
  validated = '1',
}

export enum InvoiceStatusnEnum {
  pending = '0',
  paid = '1',
}

export enum OrderByEnum {
  'DESC' = 'DESC',
  'ASC' = 'ASC',
}
