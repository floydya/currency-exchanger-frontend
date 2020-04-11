import {
  ICurrenciesState,
  CurrenciesActions,
  CurrencyActionNames,
} from "../types/currencies";

const initialState: ICurrenciesState = {
  rates: {},
  base: "",
  date: "",
  isLoading: false,
  error: null,
};

function currenciesReducer(
  state = initialState,
  { type, payload }: CurrenciesActions
) {
  switch (type) {
    case CurrencyActionNames.SET_CURRENCIES:
      return Object.assign({}, state, {
        ...payload,
        isLoading: false,
        error: null,
      });
    case CurrencyActionNames.SET_LOADING:
      return Object.assign({}, state, { isLoading: payload });
    case CurrencyActionNames.SET_ERROR:
      return Object.assign({}, state, { isLoading: false, error: payload });
    default:
      return state;
  }
}

export default currenciesReducer;
