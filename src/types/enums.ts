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

  // Clients
  GET_CLIENTS = '/clients',
  GET_CLIENT = '/clients/get',
  CREATE_CLIENT = '/clients/create',
  UPDATE_CLIENT = '/clients/update',
  DELETE_CLIENT = '/clients/delete',

  // Invoices
  GET_INVOICES = '/invoices',
  GET_INVOICE = '/invoices/get',
  CREATE_INVOICE = '/invoices/create',
  UPDATE_INVOICE = '/invoices/update',
  DELETE_INVOICE = '/invoices/delete',

  // Agents
  GET_AGENTS = '/agents',
  GET_AGENT = '/agents/get',
  CREATE_AGENT = '/agents/create',
  UPDATE_AGENT = '/agents/update',
  DELETE_AGENT = '/agents/delete',
  GEOLOC_AGENT = '/agents/geoloc',

  // Contacts
  GET_CONTACTS = '/contacts',
  GET_CONTACT = '/contacts/get',
  CREATE_CONTACT = '/contacts/create',
  UPDATE_CONTACT = '/contacts/update',
  DELETE_CONTACT = '/contacts/delete',
  CREATE_CONTACT_EVENT = '/contacts/event',
}

export enum EverestClientStatusEnum {
  inactive = '0',
  active = '1',
}

export enum EverestAgentStatusEnum {
  inactive = '0',
  active = '1',
}

export enum EverestInvoiceTypeEnum {
  estimate = '0',
  invoice = '1',
}

export enum EverestInvoiceValidationEnum {
  'not-validated' = '0',
  validated = '1',
}

export enum EverestInvoiceStatusnEnum {
  pending = '0',
  paid = '1',
}

export enum EverestOrderByEnum {
  'DESC' = 'DESC',
  'ASC' = 'ASC',
}

export enum HookEnum {
  backend_auth = 'backend_auth',
  support_email_sent = 'support_email_sent',
  user_created = 'user_created',
  user_updated = 'user_updated',
  user_deleted = 'user_deleted',
  invoice_created = 'invoice_created',
  invoice_updated = 'invoice_updated',
  invoice_deleted = 'invoice_deleted',
  refund_created = 'refund_created',
  agent_created = 'agent_created',
  agent_updated = 'agent_updated',
  agent_location_updated = 'agent_location_updated',
  agent_deleted = 'agent_deleted',
  comment_created = 'comment_created',
  comment_updated = 'comment_updated',
  client_created = 'client_created',
  client_updated = 'client_updated',
  client_deleted = 'client_deleted',
  client_tariffs_updated = 'client_tariffs_updated',
  client_api_updated = 'client_api_updated',
  contact_created = 'contact_created',
  contact_updated = 'contact_updated',
  contact_deleted = 'contact_deleted',
  form_created = 'form_created',
  form_updated = 'form_updated',
  agent_file_created = 'agent_file_created',
  agent_file_updated = 'agent_file_updated',
  agent_file_deleted = 'agent_file_deleted',
  mission_created = 'mission_created',
  missions_imported = 'missions_imported',
  mission_updated = 'mission_updated',
  mission_deleted = 'mission_deleted',
  mission_cancelled = 'mission_cancelled',
  mission_finished = 'mission_finished',
  mission_failed = 'mission_failed',
  mission_success = 'mission_success',
  mission_pickedup = 'mission_pickedup',
  mission_dispatched = 'mission_dispatched',
  mission_status = 'mission_status',
  mission_rescheduled = 'mission_rescheduled',
  mission_price_updated = 'mission_price_updated',
  service_created = 'service_created',
  service_updated = 'service_updated',
  status_created = 'status_created',
  status_updated = 'status_updated',
  vehicle_created = 'vehicle_created',
  vehicle_updated = 'vehicle_updated',
  platform_global_settings_updated = 'platform_global_settings_updated',
  platform_invoicing_updated = 'platform_invoicing_updated',
  area_of_service_created = 'area_of_service_created',
  area_of_service_updated = 'area_of_service_updated',
  tariff_politic_updated = 'tariff_politic_updated',
  dispatch_rules_updated = 'dispatch_rules_updated',
  role_created = 'role_created',
  role_updated = 'role_updated',
  availabilities_updated = 'availabilities_updated',
  establishment_created = 'establishment_created',
  establishment_updated = 'establishment_updated',
  establishment_deleted = 'establishment_deleted',
}
