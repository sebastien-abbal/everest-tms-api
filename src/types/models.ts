/**
 *
 * @export
 * @interface IEverestAgent
 */
export interface IEverestAgent {
  /**
   *
   * @type {number}
   * @memberof IEverestAgent
   */
  id?: number;
  /**
   * Avatar of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  photo?: string;
  /**
   * First name of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  first_name?: string;
  /**
   * Last name of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  last_name?: string;
  /**
   * Billing name, or full name if not billing name
   * @type {string}
   * @memberof IEverestAgent
   */
  default_name?: string;
  /**
   * Short name of the agent. (Ex: John D.)
   * @type {string}
   * @memberof IEverestAgent
   */
  short_name?: string;
  /**
   * Phone number of agent
   * @type {string}
   * @memberof IEverestAgent
   */
  tel?: string;
  /**
   * Email of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  email?: string;
  /**
   * Postal code of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  postal_code?: string;
  /**
   * Line 1 of agent's address
   * @type {string}
   * @memberof IEverestAgent
   */
  address_line1?: string;
  /**
   * Line 2 of agent's address
   * @type {string}
   * @memberof IEverestAgent
   */
  address_line2?: string;
  /**
   * true if agent is self billing the mission he's given
   * @type {boolean}
   * @memberof IEverestAgent
   */
  self_billing?: boolean;
  /**
   * true if you paid this agent for the missions he's doing
   * @type {boolean}
   * @memberof IEverestAgent
   */
  is_provider?: boolean;
  /**
   * Billing name of the agent, company name if is a company
   * @type {string}
   * @memberof IEverestAgent
   */
  billing_name?: string;
  /**
   * Address of the agent's company
   * @type {string}
   * @memberof IEverestAgent
   */
  billing_address?: string;
  /**
   * IEverestAgent company number
   * @type {string}
   * @memberof IEverestAgent
   */
  company_number?: string;
  /**
   * VAT rate of agent
   * @type {number}
   * @memberof IEverestAgent
   */
  vat?: number;
  /**
   * VAT number of agent's company
   * @type {string}
   * @memberof IEverestAgent
   */
  vat_number?: string;
  /**
   * Minimal price he's willing to accept missions for
   * @type {number}
   * @memberof IEverestAgent
   */
  price_min?: number;
  /**
   * Maximal price he's willing to accept missions for
   * @type {number}
   * @memberof IEverestAgent
   */
  price_max?: number;
  /**
   * Latitude of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  lat?: string;
  /**
   * Longitude of the agent
   * @type {string}
   * @memberof IEverestAgent
   */
  lng?: string;
  /**
   * Timestamp at which this agent was created
   * @type {number}
   * @memberof IEverestAgent
   */
  date_created?: number;
  /**
   * Timestamp at which agent was last modified
   * @type {number}
   * @memberof IEverestAgent
   */
  date_modified?: number;
  /**
   * Timestamp at which agent last logged in
   * @type {number}
   * @memberof IEverestAgent
   */
  date_last_login?: number;
  /**
   * 1 for active, 0 for inactive
   * @type {number}
   * @memberof IEverestAgent
   */
  status?: number;
  /**
   * 1 if available, 0 otherwise
   * @type {boolean}
   * @memberof IEverestAgent
   */
  available?: boolean;
  /**
   * Establishment this agent is associated with
   * @type {number}
   * @memberof IEverestAgent
   */
  establishment_id?: number;
}

/**
 *
 * @export
 * @interface IEverestClient
 */
export interface IEverestClient {
  /**
   *
   * @type {number}
   * @memberof IEverestClient
   */
  id?: number;
  /**
   * Avatar of the client
   * @type {string}
   * @memberof IEverestClient
   */
  photo?: string;
  /**
   * First name of the client
   * @type {string}
   * @memberof IEverestClient
   */
  first_name?: string;
  /**
   * Last name of the client
   * @type {string}
   * @memberof IEverestClient
   */
  last_name?: string;
  /**
   * Billing name, or full name if not billing name
   * @type {string}
   * @memberof IEverestClient
   */
  default_name?: string;
  /**
   * Phone number of client
   * @type {string}
   * @memberof IEverestClient
   */
  tel?: string;
  /**
   * Email of the client
   * @type {string}
   * @memberof IEverestClient
   */
  email?: string;
  /**
   * Postal code of the client
   * @type {string}
   * @memberof IEverestClient
   */
  postal_code?: string;
  /**
   * Internal code
   * @type {string}
   * @memberof IEverestClient
   */
  internal_code?: string;
  /**
   * Accounting code
   * @type {string}
   * @memberof IEverestClient
   */
  accounting_code?: string;
  /**
   * Line 1 of client's address
   * @type {string}
   * @memberof IEverestClient
   */
  address_line1?: string;
  /**
   * Line 2 of client's address
   * @type {string}
   * @memberof IEverestClient
   */
  address_line2?: string;
  /**
   * Billing name of the client, company name if is a company
   * @type {string}
   * @memberof IEverestClient
   */
  billing_name?: string;
  /**
   * Address of the client's company
   * @type {string}
   * @memberof IEverestClient
   */
  billing_address?: string;
  /**
   * Complementary billing informations, which are displayed on invoices
   * @type {string}
   * @memberof IEverestClient
   */
  billing_complementary?: string;
  /**
   * Fuel surcharge applied to this client
   * @type {number}
   * @memberof IEverestClient
   */
  fuel_surcharge?: number;
  /**
   * 1 if client is invoiced periodicaly
   * @type {number}
   * @memberof IEverestClient
   */
  is_periodic_invoiced?: number;
  /**
   * Period on which invoice client. One of: every_monday, 1st_of_month, 15_of_month, bimonthly, n_of_month
   * @type {string}
   * @memberof IEverestClient
   */
  invoice_period?: string;
  /**
   * Extra information for invoicing period
   * @type {number}
   * @memberof IEverestClient
   */
  invoice_period_extra?: number;
  /**
   * Informations that a client should provide when creating a mission
   * @type {Array<IEverestClientCustomInfos>}
   * @memberof IEverestClient
   */
  custom_infos?: Array<IEverestClientCustomInfos>;
  /**
   * Timestamp at which this client was created
   * @type {number}
   * @memberof IEverestClient
   */
  date_created?: number;
  /**
   * Timestamp at which client was last modified
   * @type {number}
   * @memberof IEverestClient
   */
  date_modified?: number;
  /**
   * Timestamp at which client last logged in
   * @type {number}
   * @memberof IEverestClient
   */
  date_last_login?: number;
  /**
   * 1 for active, 0 for inactive
   * @type {number}
   * @memberof IEverestClient
   */
  status?: number;
  /**
   * Establishment this client is associated with
   * @type {number}
   * @memberof IEverestClient
   */
  establishment_id?: number;
}

/**
 *
 * @export
 * @interface IEverestClientCustomInfos
 */
export interface IEverestClientCustomInfos {
  /**
   *
   * @type {string}
   * @memberof IEverestClientCustomInfos
   */
  name?: string;
  /**
   *
   * @type {boolean}
   * @memberof IEverestClientCustomInfos
   */
  mandatory?: boolean;
}

/**
 *
 * @export
 * @interface IEverestContact
 */
export interface IEverestContact {
  /**
   *
   * @type {number}
   * @memberof IEverestContact
   */
  id?: number;
  /**
   * First name of the contact
   * @type {string}
   * @memberof IEverestContact
   */
  first_name?: string;
  /**
   * Last name of the contact
   * @type {string}
   * @memberof IEverestContact
   */
  last_name?: string;
  /**
   * Company of the contact
   * @type {string}
   * @memberof IEverestContact
   */
  company?: string;
  /**
   * Email of the contact
   * @type {string}
   * @memberof IEverestContact
   */
  email?: string;
  /**
   * Job of the contact
   * @type {string}
   * @memberof IEverestContact
   */
  job?: string;
  /**
   * IEverestContact category
   * @type {string}
   * @memberof IEverestContact
   */
  category?: string;
  /**
   * Number of CRM points this contact has
   * @type {number}
   * @memberof IEverestContact
   */
  points?: number;
  /**
   * Timestamp at which this contact was created
   * @type {number}
   * @memberof IEverestContact
   */
  date_created?: number;
  /**
   * Timestamp at which contact was last modified
   * @type {number}
   * @memberof IEverestContact
   */
  date_modified?: number;
}

/**
 *
 * @export
 * @interface IEverestInvoice
 */
export interface IEverestInvoice {
  /**
   *
   * @type {number}
   * @memberof IEverestInvoice
   */
  id?: number;
  /**
   * Unique reference of the invoice
   * @type {string}
   * @memberof IEverestInvoice
   */
  ref?: string;
  /**
   * URI to view PDF invoice
   * @type {string}
   * @memberof IEverestInvoice
   */
  view_uri?: string;
  /**
   * Title of the invoice
   * @type {string}
   * @memberof IEverestInvoice
   */
  title?: string;
  /**
   * Description of the invoice
   * @type {string}
   * @memberof IEverestInvoice
   */
  description?: string;
  /**
   * Name or company the invoice is issued for
   * @type {string}
   * @memberof IEverestInvoice
   */
  name_or_company?: string;
  /**
   * Address of the company or person the invoice is issued for
   * @type {string}
   * @memberof IEverestInvoice
   */
  address?: string;
  /**
   * Array of mission's references the invoice is associated with
   * @type {Array<string>}
   * @memberof IEverestInvoice
   */
  missions?: Array<string>;
  /**
   * Amount excluding taxes of the invoice
   * @type {number}
   * @memberof IEverestInvoice
   */
  amount_excl?: number;
  /**
   * Human readable amount excluding taxes of the invoice
   * @type {string}
   * @memberof IEverestInvoice
   */
  amount_excl_formatted?: string;
  /**
   * Amount including taxes of the invoice
   * @type {number}
   * @memberof IEverestInvoice
   */
  amount_incl?: number;
  /**
   * Human readbla amount including taxes of the invoice
   * @type {boolean}
   * @memberof IEverestInvoice
   */
  amount_incl_formatted?: boolean;
  /**
   * Informations about invoice emitter
   * @type {string}
   * @memberof IEverestInvoice
   */
  created_by?: number;
  /**
   * Informations about invoice target
   * @type {string}
   * @memberof IEverestInvoice
   */
  created_for?: number;
  /**
   * IEverestAgent company number
   * @type {string}
   * @memberof IEverestInvoice
   */
  nice_date?: string;
  /**
   * Timestamp at which this invoice was created
   * @type {number}
   * @memberof IEverestInvoice
   */
  date_created?: number;
  /**
   * Timestamp at which invoice was last modified
   * @type {number}
   * @memberof IEverestInvoice
   */
  date_modified?: number;
  /**
   * Timestamp at which invoice was paid
   * @type {number}
   * @memberof IEverestInvoice
   */
  date_paid?: number;
  /**
   * 1 for validated, 0 otherwise
   * @type {number}
   * @memberof IEverestInvoice
   */
  validated?: number;
  /**
   * 1 for paid, 0 otherwise
   * @type {number}
   * @memberof IEverestInvoice
   */
  status?: number;
  /**
   * IEverestStatus as human readable text
   * @type {string}
   * @memberof IEverestInvoice
   */
  status_text?: string;
}

/**
 *
 * @export
 * @interface IEverestMission
 */
export interface IEverestMission {
  /**
   *
   * @type {string}
   * @memberof IEverestMission
   */
  ref?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMission
   */
  client_ref?: string;
  /**
   * timestamp
   * @type {number}
   * @memberof IEverestMission
   */
  start_date?: number;
  /**
   * Human readable date
   * @type {string}
   * @memberof IEverestMission
   */
  nice_date?: string;
  /**
   * Full name of the service
   * @type {string}
   * @memberof IEverestMission
   */
  service?: string;
  /**
   * Delay in minutes for the service to be done
   * @type {number}
   * @memberof IEverestMission
   */
  service_delay?: number;
  /**
   * Address at which mission starts
   * @type {string}
   * @memberof IEverestMission
   */
  address_start?: string;
  /**
   * Postal code of start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_postal_code?: string;
  /**
   * Latitude of start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_lat?: string;
  /**
   * Longitude of start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_lng?: string;
  /**
   * Customer comment associated with start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_comment?: string;
  /**
   * Name of person to reach at start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_name?: string;
  /**
   * Company of start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_company?: string;
  /**
   * Email of person to reach at start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_email?: string;
  /**
   * Phone number of person to reach at start address
   * @type {string}
   * @memberof IEverestMission
   */
  address_start_tel?: string;
  /**
   * Address at which mission ends
   * @type {string}
   * @memberof IEverestMission
   */
  address_end?: string;
  /**
   * Postal code of end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_postal_code?: string;
  /**
   * Latitude of end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_lat?: string;
  /**
   * Longitude of end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_lng?: string;
  /**
   * Customer comment associated with end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_comment?: string;
  /**
   * Name of person to reach at end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_name?: string;
  /**
   * Company of end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_company?: string;
  /**
   * Email of person to reach at end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_email?: string;
  /**
   * Phone number of person to reach at end address
   * @type {string}
   * @memberof IEverestMission
   */
  address_end_tel?: string;
  /**
   * ID of the client who created the mission
   * @type {number}
   * @memberof IEverestMission
   */
  client_id?: number;
  /**
   * Name of the client who created the mission
   * @type {string}
   * @memberof IEverestMission
   */
  client_name?: string;
  /**
   * Avatar of the client who created the mission
   * @type {string}
   * @memberof IEverestMission
   */
  client_phone?: string;
  /**
   * Expected distance in meters between start and end addresses
   * @type {number}
   * @memberof IEverestMission
   */
  distance?: number;
  /**
   * Human readable distance between start and end addressed
   * @type {string}
   * @memberof IEverestMission
   */
  distance_formatted?: string;
  /**
   * Duration in minutes for the path
   * @type {number}
   * @memberof IEverestMission
   */
  duration?: number;
  /**
   * Human readable duration
   * @type {string}
   * @memberof IEverestMission
   */
  duration_formatted?: string;
  /**
   * Weight in kgs of the mission
   * @type {number}
   * @memberof IEverestMission
   */
  weight?: number;
  /**
   * Volume in cube-meters of the mission
   * @type {number}
   * @memberof IEverestMission
   */
  volume?: number;
  /**
   * Customer comment associated with mission
   * @type {string}
   * @memberof IEverestMission
   */
  comment?: string;
  /**
   * true if mission requires roundtrip
   * @type {boolean}
   * @memberof IEverestMission
   */
  requires_return?: boolean;
  /**
   * true if mission has agent
   * @type {boolean}
   * @memberof IEverestMission
   */
  has_agent?: boolean;
  /**
   * ID of the agent
   * @type {number}
   * @memberof IEverestMission
   */
  agent_id?: number;
  /**
   * Name of the agent
   * @type {string}
   * @memberof IEverestMission
   */
  agent_name?: string;
  /**
   * Latitude of the agent
   * @type {string}
   * @memberof IEverestMission
   */
  agent_lat?: string;
  /**
   * Longitude of the agent
   * @type {string}
   * @memberof IEverestMission
   */
  agent_lng?: string;
  /**
   * Avatar of the agent
   * @type {string}
   * @memberof IEverestMission
   */
  agent_photo?: string;
  /**
   * Phone number of the agent
   * @type {string}
   * @memberof IEverestMission
   */
  agentTel?: string;
  /**
   * List of vehicles of the agent
   * @type {Array<string>}
   * @memberof IEverestMission
   */
  agent_vehicles?: Array<string>;
  /**
   * true if mission has status
   * @type {boolean}
   * @memberof IEverestMission
   */
  has_status?: boolean;
  /**
   * Slug of the status
   * @type {string}
   * @memberof IEverestMission
   */
  status?: string;
  /**
   * Name of the status
   * @type {string}
   * @memberof IEverestMission
   */
  statusText?: string;
  /**
   * Icon of the status
   * @type {string}
   * @memberof IEverestMission
   */
  status_icon?: string;
  /**
   * Date of the status (timestamp)
   * @type {number}
   * @memberof IEverestMission
   */
  status_date?: number;
  /**
   * Informations about who created this mission
   * @type {Array<Array<any>>}
   * @memberof IEverestMission
   */
  creator?: Array<Array<any>>;
  /**
   * true if mission is associated with a route
   * @type {boolean}
   * @memberof IEverestMission
   */
  has_route?: boolean;
  /**
   * Id of route
   * @type {number}
   * @memberof IEverestMission
   */
  route_id?: number;
  /**
   * Distance of the route in meters
   * @type {number}
   * @memberof IEverestMission
   */
  route_distance?: number;
  /**
   * Human readable distance of the route
   * @type {string}
   * @memberof IEverestMission
   */
  route_distance_formatted?: string;
  /**
   * Duration of the route in minutes
   * @type {number}
   * @memberof IEverestMission
   */
  route_duration?: number;
  /**
   * Human readable duration of the route
   * @type {string}
   * @memberof IEverestMission
   */
  route_duration_formatted?: string;
  /**
   * List of coordinates of the route
   * @type {Array<Array<string>>}
   * @memberof IEverestMission
   */
  route_waypoints?: Array<Array<string>>;
  /**
   * List of missions in the route (with ref, distance, duration)
   * @type {Array<Array<any>>}
   * @memberof IEverestMission
   */
  route_missions?: Array<Array<any>>;
  /**
   * Note the customer gave to the mission, number between 1 and 5
   * @type {number}
   * @memberof IEverestMission
   */
  note?: number;
  /**
   * List of images associated with the mission (photos and signature)
   * @type {Array<IEverestMissionMedia>}
   * @memberof IEverestMission
   */
  medias?: Array<IEverestMissionMedia>;
  /**
   * Price of the mission excluding taxes
   * @type {number}
   * @memberof IEverestMission
   */
  price_excl?: number;
  /**
   * Human readable price of the mission excluding taxes
   * @type {string}
   * @memberof IEverestMission
   */
  price_excl_formatted?: string;
  /**
   * Price of the mission including taxes
   * @type {number}
   * @memberof IEverestMission
   */
  price_incl?: number;
  /**
   * Human readable price of the mission including taxes
   * @type {string}
   * @memberof IEverestMission
   */
  price_incl_formatted?: string;
  /**
   * Price for the agent excluding taxes
   * @type {number}
   * @memberof IEverestMission
   */
  agent_price_excl?: number;
  /**
   * Human readable price for the agent excluding taxes
   * @type {string}
   * @memberof IEverestMission
   */
  agent_price_excl_formatted?: string;
  /**
   * Price for the agent including taxes
   * @type {number}
   * @memberof IEverestMission
   */
  agent_price_incl?: number;
  /**
   * Human readable price for the agent including taxes
   * @type {string}
   * @memberof IEverestMission
   */
  agent_price_incl_formatted?: string;
  /**
   * List of additional services for this mission
   * @type {Array<string>}
   * @memberof IEverestMission
   */
  additionals?: Array<string>;
  /**
   * Establishment this mission is associated with
   * @type {number}
   * @memberof IEverestMission
   */
  establishment_id?: number;
  /**
   * List of files associated with the mission
   * @type {Array<IEverestMissionFiles>}
   * @memberof IEverestMission
   */
  files?: Array<IEverestMissionFiles>;
  /**
   * List of custom informations associated with the mission
   * @type {Array<IEverestMissionCustomInfos>}
   * @memberof IEverestMission
   */
  custom_infos?: Array<IEverestMissionCustomInfos>;
  /**
   * List of custom informations associated with the mission
   * @type {Array<IEverestMissionPackages>}
   * @memberof IEverestMission
   */
  packages?: Array<IEverestMissionPackages>;
  /**
   * List of skills required for this mission
   * @type {Array<Array<number>>}
   * @memberof IEverestMission
   */
  skills?: Array<Array<number>>;
  /**
   * List of user comments associated with this mission
   * @type {Array<Array<any>>}
   * @memberof IEverestMission
   */
  comments?: Array<Array<any>>;
}

/**
 *
 * @export
 * @interface IEverestMissionCustomInfos
 */
export interface IEverestMissionCustomInfos {
  /**
   *
   * @type {string}
   * @memberof IEverestMissionCustomInfos
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionCustomInfos
   */
  value?: string;
}

/**
 *
 * @export
 * @interface IEverestMissionFiles
 */
export interface IEverestMissionFiles {
  /**
   *
   * @type {string}
   * @memberof IEverestMissionFiles
   */
  src?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionFiles
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionFiles
   */
  date_created?: number;
}

/**
 *
 * @export
 * @interface IEverestMissionMedia
 */
export interface IEverestMissionMedia {
  /**
   *
   * @type {string}
   * @memberof IEverestMissionMedia
   */
  src?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionMedia
   */
  lat?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionMedia
   */
  lng?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionMedia
   */
  comment?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionMedia
   */
  type?: string;
}

/**
 *
 * @export
 * @interface IEverestMissionPackages
 */
export interface IEverestMissionPackages {
  /**
   *
   * @type {string}
   * @memberof IEverestMissionPackages
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionPackages
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionPackages
   */
  volume?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionPackages
   */
  length?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionPackages
   */
  width?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionPackages
   */
  depth?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestMissionPackages
   */
  ref?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestMissionPackages
   */
  quantity?: number;
}

/**
 *
 * @export
 * @interface IEverestStatus
 */
export interface IEverestStatus {
  /**
   * Sandbox
   * @type {string}
   * @memberof IEverestStatus
   */
  name?: string;
  /**
   * Font awesome icon character
   * @type {string}
   * @memberof IEverestStatus
   */
  icon?: string;
  /**
   * List of this status options
   * @type {Array<string>}
   * @memberof IEverestStatus
   */
  options?: Array<string>;
  /**
   * true if this is the default status
   * @type {boolean}
   * @memberof IEverestStatus
   */
  is_default?: boolean;
  /**
   * true if this status corresponds to a successful mission
   * @type {boolean}
   * @memberof IEverestStatus
   */
  is_success?: boolean;
  /**
   * true if this is the status for mission cancellation
   * @type {boolean}
   * @memberof IEverestStatus
   */
  is_cancel?: boolean;
  /**
   * true if this status corresponds to a failed mission
   * @type {boolean}
   * @memberof IEverestStatus
   */
  is_fail?: boolean;
  /**
   * true if this status corresponds to a dispatched mission
   * @type {boolean}
   * @memberof IEverestStatus
   */
  is_dispatch?: boolean;
  /**
   * true if this status corresponds to when the mission is picked-up
   * @type {boolean}
   * @memberof IEverestStatus
   */
  is_pickup?: boolean;
  /**
   * Extras informations attached to status
   * @type {Array<string>}
   * @memberof IEverestStatus
   */
  extras?: Array<string>;
  /**
   * Statuses this status is allowed after
   * @type {Array<string>}
   * @memberof IEverestStatus
   */
  after?: Array<string>;
}

/**
 *
 * @export
 * @interface IEverestPlatform
 */
export interface IEverestPlatform {
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  logo: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  color: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  tel: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  agent_support_email: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  agent_support_tel: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  agent_support_text: string;
  /**
   *
   * @type {boolean}
   * @memberof IEverestPlatform
   */
  force_route_order: boolean;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  client_support_email: string;
  /**
   *
   * @type {string}
   * @memberof IEverestPlatform
   */
  client_support_tel: string;
}

/**
 *
 * @export
 * @interface IEverestServiceAvailability
 */
export interface IEverestServiceAvailability {
  /**
   *
   * @type {number}
   * @memberof IEverestServiceAvailability
   */
  index: number;
  /**
   *
   * @type {boolean}
   * @memberof IEverestServiceAvailability
   */
  active: boolean;
  /**
   *
   * @type {Array<string, string>}
   * @memberof IEverestServiceAvailability
   */
  ranges: [string, string];
}
