import axios, { AxiosInstance } from 'axios';
import {
  EverestRoutesEnum,
  IEverestAgentResponse,
  IEverestAgentsResponse,
  IEverestAreasOfServiceInput,
  IEverestAreasOfServiceResponse,
  IEverestAuthenticateResponse,
  IEverestAvailabilitiesResponse,
  IEverestCancelMissionInput,
  IEverestClientResponse,
  IEverestClientsResponse,
  IEverestContactResponse,
  IEverestContactsResponse,
  IEverestCreateAgentInput,
  IEverestCreateClientInput,
  IEverestCreateContactEventInput,
  IEverestCreateContactInput,
  IEverestCreateInvoiceInput,
  IEverestCreateMissionInput,
  IEverestDefaultResponse,
  IEverestDeleteAgentInput,
  IEverestDeleteClientInput,
  IEverestDeleteContactInput,
  IEverestDeleteInvoiceInput,
  IEverestDeleteMissionInput,
  IEverestEstimateMissionInput,
  IEverestEstimateMissionResponse,
  IEverestGetAgentInput,
  IEverestGetAgentsInput,
  IEverestGetClientInput,
  IEverestGetClientsInput,
  IEverestGetContactInput,
  IEverestGetContactsInput,
  IEverestGetInvoiceInput,
  IEverestGetInvoicesInput,
  IEverestGetMissionInput,
  IEverestGetMissionsInput,
  IEverestInfosResponse,
  IEverestInvoiceResponse,
  IEverestInvoicesResponse,
  IEverestIsHandledAddressInput,
  IEverestMissionResponse,
  IEverestMissionsResponse,
  IEverestServicesInput,
  IEverestServicesResponse,
  IEverestStatusesResponse,
  IEverestUpdateAgentInput,
  IEverestUpdateClientInput,
  IEverestUpdateContactInput,
  IEverestUpdateInvoiceInput,
  IEverestUpdateMissionInput,
  IEverestUpdateMissionStatusInput,
  IEverestVehicleTypesResponse,
} from '..';
import { config } from '../config';

export class EverestApi {
  private endpoint: string;
  private client_id: string;
  private client_secret: string;
  private timeout: number;

  public authToken: string = null;

  constructor({
    endpoint,
    client_id,
    client_secret,
    timeout,
  }: {
    endpoint: string;
    client_id: string;
    client_secret: string;
    timeout?: number;
  }) {
    this.endpoint = endpoint;
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.timeout = timeout || config.everest.timeout;
  }

  private createInstance = (auth?: string): AxiosInstance =>
    axios.create({
      baseURL: this.endpoint,
      timeout: this.timeout,
      headers: {
        common: {
          Authorization: Boolean(auth) ? `Bearer ${auth}` : undefined,
        },
      },
    });

  private convertJsTimestampToUnixTimestamp = (timestamp: number) =>
    parseInt((timestamp / 1000).toString());

  // General
  public authenticate = async (): Promise<IEverestAuthenticateResponse> => {
    const instance = this.createInstance();

    try {
      const result = await instance.post(EverestRoutesEnum.AUTH, {
        client_id: this.client_id,
        client_secret: this.client_secret,
      });
      if (result.status === 200) this.authToken = result.data.token;
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getInfos = async (): Promise<IEverestInfosResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.INFOS);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getServices = async (
    input: IEverestServicesInput = {},
  ): Promise<IEverestServicesResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.SERVICES);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getVehicleTypes = async (): Promise<IEverestVehicleTypesResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.VEHICLE_TYPES);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getAreasOfService = async (
    input: IEverestAreasOfServiceInput = {},
  ): Promise<IEverestAreasOfServiceResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.AREAS_OF_SERVICE);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getAvailabilities =
    async (): Promise<IEverestAvailabilitiesResponse> => {
      const instance = this.createInstance(this.authToken);

      try {
        const result = await instance.get(EverestRoutesEnum.AVAILABILITIES);
        return result.data;
      } catch (err) {
        throw new Error(err.response ? err.response.data.error : err);
      }
    };

  // Missions
  public getMission = async (
    input: IEverestGetMissionInput,
  ): Promise<IEverestMissionResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_MISSION, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getMissions = async (
    input: IEverestGetMissionsInput = {},
  ): Promise<IEverestMissionsResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_MISSIONS, {
        data: {
          ...input,
          date_between_start: input.date_between_start
            ? this.convertJsTimestampToUnixTimestamp(
                new Date(input.date_between_start).getTime(),
              )
            : undefined,
          date_between_end: input.date_between_end
            ? this.convertJsTimestampToUnixTimestamp(
                new Date(input.date_between_end).getTime(),
              )
            : undefined,
        },
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getMissionStatuses = async (): Promise<IEverestStatusesResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_MISSION_STATUSES);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getIsHandledAddress = async (
    input: IEverestIsHandledAddressInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.IS_HANDLED_ADDRESS, {
        data: {
          ...input,
          start_date: input.start_date
            ? this.convertJsTimestampToUnixTimestamp(
                new Date(input.start_date).getTime(),
              )
            : undefined,
        },
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public estimateMission = async (
    input: IEverestEstimateMissionInput,
  ): Promise<IEverestEstimateMissionResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.post(EverestRoutesEnum.ESTIMATE_MISSION, {
        ...input,
        start_date: input.start_date
          ? this.convertJsTimestampToUnixTimestamp(
              new Date(input.start_date).getTime(),
            )
          : undefined,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public createMission = async (
    input: IEverestCreateMissionInput,
  ): Promise<IEverestMissionResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.post(EverestRoutesEnum.CREATE_MISSION, {
        ...input,
        start_date: input.start_date
          ? this.convertJsTimestampToUnixTimestamp(
              new Date(input.start_date).getTime(),
            )
          : undefined,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public updateMission = async (
    input: IEverestUpdateMissionInput,
  ): Promise<IEverestMissionResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(EverestRoutesEnum.UPDATE_MISSION, {
        ...input,
        start_date: input.start_date
          ? this.convertJsTimestampToUnixTimestamp(
              new Date(input.start_date).getTime(),
            )
          : undefined,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public deleteMission = async (
    input: IEverestDeleteMissionInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.delete(EverestRoutesEnum.DELETE_MISSION, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public updateMissionStatus = async (
    input: IEverestUpdateMissionStatusInput,
  ): Promise<IEverestMissionResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(
        EverestRoutesEnum.STATUS_MISSION,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public cancelMission = async (
    input: IEverestCancelMissionInput,
  ): Promise<IEverestMissionResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(
        EverestRoutesEnum.CANCEL_MISSION,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  // Clients
  public getClient = async (
    input: IEverestGetClientInput,
  ): Promise<IEverestClientResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_CLIENT, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getClients = async (
    input: IEverestGetClientsInput = {},
  ): Promise<IEverestClientsResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_CLIENTS, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public createClient = async (
    input: IEverestCreateClientInput,
  ): Promise<IEverestClientResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.post(
        EverestRoutesEnum.CREATE_CLIENT,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public updateClient = async (
    input: IEverestUpdateClientInput,
  ): Promise<IEverestClientResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(EverestRoutesEnum.UPDATE_CLIENT, input);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public deleteClient = async (
    input: IEverestDeleteClientInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.delete(EverestRoutesEnum.DELETE_CLIENT, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  // Agents
  public getAgent = async (
    input: IEverestGetAgentInput,
  ): Promise<IEverestAgentResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_AGENT, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getAgents = async (
    input: IEverestGetAgentsInput = {},
  ): Promise<IEverestAgentsResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_AGENTS, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public createAgent = async (
    input: IEverestCreateAgentInput,
  ): Promise<IEverestAgentResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.post(EverestRoutesEnum.CREATE_AGENT, input);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public updateAgent = async (
    input: IEverestUpdateAgentInput,
  ): Promise<IEverestAgentResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(EverestRoutesEnum.UPDATE_AGENT, input);
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public deleteAgent = async (
    input: IEverestDeleteAgentInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.delete(EverestRoutesEnum.DELETE_AGENT, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  // TODO: Authenticate an agent to call this route
  // public geolocAgent = async (
  //   input: IEverestGeolocAgentInput,
  // ): Promise<IEverestGeolocAgentInput> => {
  //   const instance = this.createInstance(this.authToken);

  //   try {
  //     const result = await instance.put(EverestRoutesEnum.GEOLOC_AGENT, {
  //       data: input,
  //     });
  //     return result.data;
  //   } catch (err) {
  //     throw new Error(err.response ? err.response.data.error : err);;
  //   }
  // };

  // Invoices
  public getInvoice = async (
    input: IEverestGetInvoiceInput,
  ): Promise<IEverestInvoiceResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_INVOICE, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getInvoices = async (
    input: IEverestGetInvoicesInput = {},
  ): Promise<IEverestInvoicesResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_INVOICES, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public createInvoice = async (
    input: IEverestCreateInvoiceInput,
  ): Promise<IEverestInvoiceResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.post(
        EverestRoutesEnum.CREATE_INVOICE,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public updateInvoice = async (
    input: IEverestUpdateInvoiceInput,
  ): Promise<IEverestInvoiceResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(
        EverestRoutesEnum.UPDATE_INVOICE,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public deleteInvoice = async (
    input: IEverestDeleteInvoiceInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.delete(EverestRoutesEnum.DELETE_INVOICE, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  // Contacts
  public getContact = async (
    input: IEverestGetContactInput,
  ): Promise<IEverestContactResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_CONTACT, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public getContacts = async (
    input: IEverestGetContactsInput = {},
  ): Promise<IEverestContactsResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.get(EverestRoutesEnum.GET_CONTACTS, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public createContact = async (
    input: IEverestCreateContactInput,
  ): Promise<IEverestContactResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.post(
        EverestRoutesEnum.CREATE_CONTACT,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public updateContact = async (
    input: IEverestUpdateContactInput,
  ): Promise<IEverestContactResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.put(
        EverestRoutesEnum.UPDATE_CONTACT,
        input,
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public deleteContact = async (
    input: IEverestDeleteContactInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.delete(EverestRoutesEnum.DELETE_CONTACT, {
        data: input,
      });
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };

  public createContactEvent = async (
    input: IEverestCreateContactEventInput,
  ): Promise<IEverestDefaultResponse> => {
    const instance = this.createInstance(this.authToken);

    try {
      const result = await instance.delete(
        EverestRoutesEnum.CREATE_CONTACT_EVENT,
        {
          data: input,
        },
      );
      return result.data;
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err);
    }
  };
}
