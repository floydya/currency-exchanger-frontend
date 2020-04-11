import {
  ICurrenciesState,
  CurrenciesActions,
  CurrencyActionNames,
  ConverterActionsNames,
} from "../types/currencies";

const initialState: ICurrenciesState = {
  rates: {},
  base: "",
  date: "",
  isLoading: false,
  error: null,
  from: JSON.parse(
    localStorage.getItem("converter_from") || '{"currency": null, "value": 0}'
  ),
  to: JSON.parse(
    localStorage.getItem("converter_to") || '{"currency": null, "value": 0}'
  ),
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
    case ConverterActionsNames.SET_FROM_VALUE:
      if (!payload) payload = 0;
      const newFromValue = Object.assign({}, state.from, { value: payload });
      localStorage.setItem("converter_from", JSON.stringify(newFromValue));
      if (state.to.currency) {
        const newToRate =
          (parseFloat(payload.toString()) / state.rates[state.from.currency]) *
          state.rates[state.to.currency];
        return Object.assign({}, state, {
          from: newFromValue,
          to: { ...state.to, value: newToRate },
        });
      }
      return Object.assign({}, state, { from: newFromValue });
    case ConverterActionsNames.SET_TO_VALUE:
      if (!payload) payload = 0;
      const newToValue = Object.assign({}, state.to, { value: payload });
      localStorage.setItem("converter_to", JSON.stringify(newToValue));
      if (state.from.currency) {
        const newFromRate =
          (parseFloat(payload.toString()) / state.rates[state.to.currency]) *
          state.rates[state.from.currency];
        return Object.assign({}, state, {
          to: newToValue,
          from: { ...state.from, value: newFromRate },
        });
      }
      return Object.assign({}, state, { to: newToValue });
    case ConverterActionsNames.SET_FROM_CURRENCY:
      const newFromCurrency = Object.assign({}, state.from, {
        currency: payload,
      });
      localStorage.setItem("converter_from", JSON.stringify(newFromCurrency));
      return Object.assign({}, state, { from: newFromCurrency });
    case ConverterActionsNames.SET_TO_CURRENCY:
      const newToCurrency = Object.assign({}, state.to, { currency: payload });
      localStorage.setItem("converter_to", JSON.stringify(newToCurrency));
      return Object.assign({}, state, { to: newToCurrency });
    default:
      return state;
  }
}

export default currenciesReducer;
