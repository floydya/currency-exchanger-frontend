import React from "react";
import Select from "antd/es/select";
import { ICurrency } from "../containers";

interface IProps {
  selectedCurrency: string;
  onChange: (currency: string) => void;
  currencies: ICurrency[];
}

const SelectCurrency: React.FC<IProps> = ({
  selectedCurrency,
  onChange,
  currencies,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "25px",
    }}
  >
    <Select
      showSearch
      style={{ width: 500 }}
      placeholder="Select currency"
      optionFilterProp="children"
      value={selectedCurrency}
      onChange={onChange}
      filterOption={(input, option) =>
        option
          ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          : true
      }
    >
      {currencies.map((currency) => (
        <Select.Option value={currency.name} key={currency.name}>
          {currency.name}
        </Select.Option>
      ))}
    </Select>
  </div>
);

export default SelectCurrency;
