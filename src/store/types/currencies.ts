export interface IApiResponse {
  rates: {
    [name: string]: number;
  }
  base: string;
  date: string;
}

export interface ICurrenciesState extends IApiResponse {
  isLoading: boolean;
  error?: any;
}

export enum CurrencyActionNames {
  SET_CURRENCIES = "CURRENCIES:SET_ITEMS",
  SET_LOADING = "CURRENCIES:SET_LOADING",
  SET_ERROR = "CURRENCIES:SET_ERROR",
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

export type CurrenciesActions = ISetItems | ISetLoading | ISetError;
