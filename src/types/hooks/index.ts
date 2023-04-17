import {
  IEverestAgentCreatedHook,
  IEverestAgentDeletedHook,
  IEverestAgentFileCreatedHook,
  IEverestAgentFileDeletedHook,
  IEverestAgentFileUpdatedHook,
  IEverestAgentLocationUpdatedHook,
  IEverestAgentUpdatedHook,
} from './agent';
import {
  IEverestClientApiUpdatedHook,
  IEverestClientCreatedHook,
  IEverestClientDeletedHook,
  IEverestClientTariffsUpdatedHook,
  IEverestClientUpdatedHook,
} from './client';
import {
  IEverestContactCreatedHook,
  IEverestContactDeletedHook,
  IEverestContactUpdatedHook,
} from './contact';
import {
  IEverestAreaOfServiceCreatedHook,
  IEverestAreaOfServiceUpdatedHook,
  IEverestAvailabilitiesUpdatedHook,
  IEverestBackEndAuthHook,
  IEverestDispatchRulesUpdatedHook,
  IEverestEstablishmentCreatedHook,
  IEverestEstablishmentUpdatedHook,
  IEverestFormCreatedHook,
  IEverestFormUpdatedHook,
  IEverestPlatformGlobalSettingsUpdatedHook,
  IEverestPlatformInvoicingUpdatedHook,
  IEverestRoleCreatedHook,
  IEverestRoleDeletedHook,
  IEverestRoleUpdatedHook,
  IEverestServiceCreatedHook,
  IEverestServiceUpdatedHook,
  IEverestStatusCreatedHook,
  IEverestStatusUpdatedHook,
  IEverestSupportEmailSentHook,
  IEverestTariffPoliticUpdatedHook,
  IEverestUserCreatedHook,
  IEverestUserDeletedHook,
  IEverestUserUpdatedHook,
  IEverestVehicleCreatedHook,
  IEverestVehicleUpdatedHook,
} from './general';
import {
  IEverestInvoiceCreatedHook,
  IEverestInvoiceDeletedHook,
  IEverestInvoiceUpdatedHook,
  IEverestRefundCreatedHook,
} from './invoice';
import {
  IEverestMissionCancelledHook,
  IEverestMissionCommentCreatedHook,
  IEverestMissionCommentUpdatedHook,
  IEverestMissionCreatedHook,
  IEverestMissionDeletedHook,
  IEverestMissionDispatchedHook,
  IEverestMissionFailedHook,
  IEverestMissionFinishedHook,
  IEverestMissionPickedUpHook,
  IEverestMissionPriceUpdatedHook,
  IEverestMissionRescheduledHook,
  IEverestMissionStatusChangedHook,
  IEverestMissionSuccessHook,
  IEverestMissionUpdatedHook,
  IEverestMissionsImportedHook,
} from './mission';

export type IEverestHook =
  | IEverestAgentCreatedHook
  | IEverestAgentDeletedHook
  | IEverestAgentFileCreatedHook
  | IEverestAgentFileDeletedHook
  | IEverestAgentFileUpdatedHook
  | IEverestAgentLocationUpdatedHook
  | IEverestAgentUpdatedHook
  | IEverestClientApiUpdatedHook
  | IEverestClientCreatedHook
  | IEverestClientDeletedHook
  | IEverestClientTariffsUpdatedHook
  | IEverestClientUpdatedHook
  | IEverestContactCreatedHook
  | IEverestContactDeletedHook
  | IEverestContactUpdatedHook
  | IEverestAreaOfServiceCreatedHook
  | IEverestAreaOfServiceUpdatedHook
  | IEverestAvailabilitiesUpdatedHook
  | IEverestBackEndAuthHook
  | IEverestDispatchRulesUpdatedHook
  | IEverestEstablishmentCreatedHook
  | IEverestEstablishmentUpdatedHook
  | IEverestFormCreatedHook
  | IEverestFormUpdatedHook
  | IEverestPlatformGlobalSettingsUpdatedHook
  | IEverestPlatformInvoicingUpdatedHook
  | IEverestRoleCreatedHook
  | IEverestRoleDeletedHook
  | IEverestRoleUpdatedHook
  | IEverestServiceCreatedHook
  | IEverestServiceUpdatedHook
  | IEverestStatusCreatedHook
  | IEverestStatusUpdatedHook
  | IEverestSupportEmailSentHook
  | IEverestTariffPoliticUpdatedHook
  | IEverestUserCreatedHook
  | IEverestUserDeletedHook
  | IEverestUserUpdatedHook
  | IEverestVehicleCreatedHook
  | IEverestVehicleUpdatedHook
  | IEverestInvoiceCreatedHook
  | IEverestInvoiceDeletedHook
  | IEverestInvoiceUpdatedHook
  | IEverestRefundCreatedHook
  | IEverestMissionCancelledHook
  | IEverestMissionCommentCreatedHook
  | IEverestMissionCommentUpdatedHook
  | IEverestMissionCreatedHook
  | IEverestMissionDeletedHook
  | IEverestMissionDispatchedHook
  | IEverestMissionFailedHook
  | IEverestMissionFinishedHook
  | IEverestMissionPickedUpHook
  | IEverestMissionPriceUpdatedHook
  | IEverestMissionRescheduledHook
  | IEverestMissionStatusChangedHook
  | IEverestMissionSuccessHook
  | IEverestMissionUpdatedHook
  | IEverestMissionsImportedHook;
