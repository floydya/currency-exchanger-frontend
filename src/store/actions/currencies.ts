import axios from "axios";
import {
  CurrencyActionNames,
  ICurrenciesState,
  CurrenciesActions,
  IApiResponse,
  ConverterActionsNames,
} from "../types/currencies";
import { ThunkAction } from "redux-thunk";
import store from "..";

type ThunkResult<R> = ThunkAction<
  R,
  ICurrenciesState,
  undefined,
  CurrenciesActions
>;

const actions = {
  setItems: (payload: IApiResponse): CurrenciesActions => ({
    type: CurrencyActionNames.SET_CURRENCIES,
    payload,
  }),
  setError: (payload: any): CurrenciesActions => ({
    type: CurrencyActionNames.SET_ERROR,
    payload,
  }),
  setLoading: (payload: boolean): CurrenciesActions => ({
    type: CurrencyActionNames.SET_LOADING,
    payload,
  }),
  fetchCurrency: (): ThunkResult<void> => (dispatch) => {
    dispatch(actions.setLoading(true));
    const currency = store.getState().user.selectedCurrency;
    axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`).then(
      (response) => dispatch(actions.setItems(response.data)),
      (error) => dispatch(actions.setError(error))
    );
  },
  setFromCurrency: (currency: string): CurrenciesActions => ({
    type: ConverterActionsNames.SET_FROM_CURRENCY,
    payload: currency,
  }),
  setToCurrency: (currency: string): CurrenciesActions => ({
    type: ConverterActionsNames.SET_TO_CURRENCY,
    payload: currency,
  }),
  setFromValue: (value: number): CurrenciesActions => ({
    type: ConverterActionsNames.SET_FROM_VALUE,
    payload: value,
  }),
  setToValue: (value: number): CurrenciesActions => ({
    type: ConverterActionsNames.SET_TO_VALUE,
    payload: value,
  }),
};

export default actions;
