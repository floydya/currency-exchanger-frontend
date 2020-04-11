import React from "react";
import ConverterComponent from "../components";
import { IStore } from "../../../store";
import { connect } from "react-redux";

interface IProps {
  currencies: string[];
}

const Converter: React.FC<IProps> = ({ currencies }) => {
  return <ConverterComponent currencies={currencies} />;
};

const mapStateToProps = (state: IStore) => ({
  currencies: Object.keys(state.currencies.rates),
});

export default connect(mapStateToProps)(Converter);
