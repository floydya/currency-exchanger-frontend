export interface IApiResponse {
  rates: {
    [name: string]: number;
  };
  base: string;
  date: string;
}
interface ICurrencyInputState {
  currency: string;
  value: number;
}

export interface ICurrenciesState extends IApiResponse {
  isLoading: boolean;
  error?: any;
  from: ICurrencyInputState;
  to: ICurrencyInputState;
}

export enum CurrencyActionNames {
  SET_CURRENCIES = "CURRENCIES:SET_ITEMS",
  SET_LOADING = "CURRENCIES:SET_LOADING",
  SET_ERROR = "CURRENCIES:SET_ERROR",
}

export enum ConverterActionsNames {
  SET_FROM_CURRENCY = "CONVERTER:SET_FROM_CURRENCY",
  SET_TO_CURRENCY = "CONVERTER:SET_TO_CURRENCY",
  SET_FROM_VALUE = "CONVERTER:SET_FROM_VALUE",
  SET_TO_VALUE = "CONVERTER:SET_TO_VALUE",
}

interface ISetItems {
  type: typeof CurrencyActionNames.SET_CURRENCIES;
  payload: IApiResponse;
}

interface ISetLoading {
  type: typeof CurrencyActionNames.SET_LOADING;
  payload: boolean;
}

interface ISetError {
  type: typeof CurrencyActionNames.SET_ERROR;
  payload: any;
}
interface ISetCurrency {
  type:
    | typeof ConverterActionsNames.SET_FROM_CURRENCY
    | typeof ConverterActionsNames.SET_TO_CURRENCY;
  payload: string;
}

interface ISetValue {
  type:
    | typeof ConverterActionsNames.SET_FROM_VALUE
    | typeof ConverterActionsNames.SET_TO_VALUE;
  payload: number;
}
export type CurrenciesActions =
  | ISetItems
  | ISetLoading
  | ISetError
  | ISetCurrency
  | ISetValue;
