/**
 *
 * @export
 * @interface IEverestGetContactInput
 */
export interface IEverestGetContactInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetContactInput
   */
  id: number;
}

/**
 *
 * @export
 * @interface IEverestGetContactsInput
 */
export interface IEverestGetContactsInput {
  /**
   *
   * @type {number}
   * @memberof IEverestGetContactsInput
   */
  limit_start?: number;
  /**
   *
   * @type {number}
   * @memberof IEverestGetContactsInput
   */
  limit_end?: number;
  /**
   *
   * @type {string}
   * @memberof IEverestGetContactsInput
   */
  search?: string;
}

/**
 *
 * @export
 * @interface IEverestCreateContactInput
 */
export interface IEverestCreateContactInput {
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  first_name: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  last_name: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  job?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateContactInput
   */
  points?: number;
}

/**
 *
 * @export
 * @interface IEverestUpdateContactInput
 */
export interface IEverestUpdateContactInput {
  /**
   *
   * @type {number}
   * @memberof IEverestUpdateContactInput
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateContactInput
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateContactInput
   */
  first_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateContactInput
   */
  last_name?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestUpdateContactInput
   */
  tel?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  company?: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactInput
   */
  job?: string;
  /**
   *
   * @type {number}
   * @memberof IEverestCreateContactInput
   */
  points?: number;
}

/**
 *
 * @export
 * @interface IEverestDeleteContactInput
 */
export interface IEverestDeleteContactInput {
  /**
   *
   * @type {number}
   * @memberof IEverestDeleteContactInput
   */
  id: number;
}

/**
 *
 * @export
 * @interface IEverestCreateContactEventInput
 */
export interface IEverestCreateContactEventInput {
  /**
   *
   * @type {number}
   * @memberof IEverestCreateContactEventInput
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactEventInput
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof IEverestCreateContactEventInput
   */
  desc: string;
}
