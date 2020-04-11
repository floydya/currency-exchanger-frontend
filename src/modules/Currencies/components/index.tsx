import React from "react";
import Table from "antd/es/table";
import Row from "antd/es/row";
import Col from "antd/es/col";
import FavoritesList from "./FavoritesList";
import { ICurrency } from "../containers";
import SelectCurrency from "./SelectCurrency";

interface IProps {
  data: ICurrency[];
  columns: {
    title: string;
    key: string;
    dataIndex?: string;
    render?: (text: any, record: any) => React.ReactNode;
  }[];
  onChange: (currency: string) => void;
  removeFavorite: (currency: string) => void;
  selectedCurrency: string;
  isLoading: boolean;
  favorites: string[];
}

const CurrenciesComponent: React.FC<IProps> = ({
  data,
  columns,
  onChange,
  selectedCurrency,
  isLoading,
  favorites,
  removeFavorite,
}) => (
  <Row>
    <Col sm={8} style={{ padding: "0 25px" }}>
      <FavoritesList
        favorites={favorites}
        removeFavorite={removeFavorite}
        onChange={onChange}
      />
    </Col>
    <Col sm={16}>
      <SelectCurrency
        selectedCurrency={selectedCurrency}
        currencies={data}
        onChange={onChange}
      />
      <Table loading={isLoading} dataSource={data} columns={columns} />
    </Col>
  </Row>
);

export default CurrenciesComponent;
