import { HookEnum } from '../enums';

export interface IEverestInvoiceCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestInvoiceCreatedHook
   */
  event: HookEnum.invoice_created;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceCreatedHook
   */
  invoice_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceCreatedHook
   */
  type: number;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  title: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  description: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  name_or_company: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  address: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestInvoiceCreatedHook
   */
  missions: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceCreatedHook
   */
  amount_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceCreatedHook
   */
  amount_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceCreatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceCreatedHook
   */
  date_paid: number;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  created_by: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceCreatedHook
   */
  created_for: string;
}

export interface IEverestInvoiceUpdatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestInvoiceUpdatedHook
   */
  event: HookEnum.invoice_updated;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  invoice_id: number;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  ref: string;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  type: number;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  title: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  description: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  name_or_company: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  address: string;

  /**
   *
   * @type {string[]}
   * @memberof IEverestInvoiceUpdatedHook
   */
  missions: string[];

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  amount_excl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  amount_incl: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  date_created: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  date_modified: number;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceUpdatedHook
   */
  date_paid: number;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  created_by: string;

  /**
   *
   * @type {string}
   * @memberof IEverestInvoiceUpdatedHook
   */
  created_for: string;
}

export interface IEverestInvoiceDeletedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestInvoiceDeletedHook
   */
  event: HookEnum.invoice_deleted;

  /**
   *
   * @type {number}
   * @memberof IEverestInvoiceDeletedHook
   */
  invoice_id: number;
}

export interface IEverestRefundCreatedHook {
  /**
   *
   * @type {HookEnum}
   * @memberof IEverestRefundCreatedHook
   */
  event: HookEnum.refund_created;

  /**
   *
   * @type {number}
   * @memberof IEverestRefundCreatedHook
   */
  refund_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestRefundCreatedHook
   */
  invoice_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestRefundCreatedHook
   */
  user_id: number;

  /**
   *
   * @type {number}
   * @memberof IEverestRefundCreatedHook
   */
  amount: number;

  /**
   *
   * @type {string}
   * @memberof IEverestRefundCreatedHook
   */
  reason: string;

  /**
   *
   * @type {number}
   * @memberof IEverestRefundCreatedHook
   */
  pdf: number;

  /**
   *
   * @type {number}
   * @memberof IEverestRefundCreatedHook
   */
  date_created: number;
}
