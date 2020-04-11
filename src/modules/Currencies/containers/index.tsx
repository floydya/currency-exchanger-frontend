import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IStore } from "../../../store";
import CurrenciesComponent from "../components";
import { userActions } from "../../../store/actions";
import { UserActions } from "../../../store/types/user";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export interface ICurrency {
  name: string;
  value: number;
}

interface IProps {
  setCurrency: (currency: string) => void;
  addFavorite: (currency: string) => void;
  removeFavorite: (currency: string) => void;
  selectedCurrency: string;
  currencies: ICurrency[];
  favorites: string[];
  isLoading: boolean;
}

const sortFunc = (favorites: string[]) => (a: ICurrency, b: ICurrency) => {
  const aI = favorites.includes(a.name) ? 1 : 0;
  const bI = favorites.includes(b.name) ? 1 : 0;
  return bI - aI;
};

export const Currencies: React.FC<IProps> = ({
  setCurrency,
  selectedCurrency,
  currencies,
  addFavorite,
  removeFavorite,
  favorites,
  isLoading
}) => {
  const columns = React.useMemo(
    () => [
      {
        title: "Currency",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Value",
        dataIndex: "value",
        key: "value",
      },
      {
        title: "",
        key: "name",
        dataIndex: "name",
        render: (text: any, record: ICurrency) =>
          favorites.includes(record.name) ? (
            <StarFilled onClick={removeFavorite.bind(null, record.name)}/>
          ) : (
            <StarOutlined onClick={addFavorite.bind(null, record.name)} />
          ),
      },
    ],
    [favorites, addFavorite, removeFavorite]
  );

  return (
    <div>
      <CurrenciesComponent
        isLoading={isLoading}
        data={currencies.sort(sortFunc(favorites))}
        columns={columns}
        onChange={setCurrency}
        selectedCurrency={selectedCurrency}
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  selectedCurrency: state.user.selectedCurrency,
  currencies: Object.entries(state.currencies.rates).map(([name, value]) => ({
    name,
    value,
  })),
  isLoading: state.currencies.isLoading,
  favorites: state.user.favorites,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
  setCurrency: (currency: string) =>
    dispatch(userActions.setCurrency(currency)),
  addFavorite: (currency: string) =>
    dispatch(userActions.addFavorite(currency)),
  removeFavorite: (currency: string) =>
    dispatch(userActions.removeFavorite(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
