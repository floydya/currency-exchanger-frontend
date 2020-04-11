import axios from "axios";
import {
  CurrencyActionNames,
  ICurrenciesState,
  CurrenciesActions,
  IApiResponse,
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
};

export default actions;
