import React from "react";
import CurrencyInput from "./CurrencyInput";
import { IStore } from "../../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { currenciesActions } from "../../../store/actions";
import { CurrenciesActions } from "../../../store/types/currencies";

interface IProps {
  currencies: string[];
}

const FirstCurrencyInput = connect((state: IStore) => ({
  currency: state.currencies.from.currency,
  value: state.currencies.from.value,
}), (dispatch: Dispatch<CurrenciesActions>) => ({
  setValue: (value: number) => dispatch(currenciesActions.setFromValue(value)),
  setCurrency: (currency: string) => dispatch(currenciesActions.setFromCurrency(currency)),
}))(CurrencyInput);

const SecondCurrencyInput = connect((state: IStore) => ({
  currency: state.currencies.to.currency,
  value: state.currencies.to.value,
}), (dispatch: Dispatch<CurrenciesActions>) => ({
  setValue: (value: number) => dispatch(currenciesActions.setToValue(value)),
  setCurrency: (currency: string) => dispatch(currenciesActions.setToCurrency(currency)),
}))(CurrencyInput);

const ConverterComponent: React.FC<IProps> = ({ currencies }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <FirstCurrencyInput currencies={currencies} />
      <SecondCurrencyInput currencies={currencies} />
    </div>
  );
};

export default ConverterComponent;
