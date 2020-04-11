import React from "react";
import Input from "antd/es/input";
import Select from "antd/es/select";

interface IProps {
  currencies: string[];
  currency: string;
  value: number;
  setCurrency: (a: string) => void;
  setValue: (value: number) => void;
}

const CurrencyInput: React.FC<IProps> = ({ currencies, currency, value, setValue, setCurrency }) => {
  return (
    <div style={{ display: "flex", margin: "5px 0" }}>
      <Input type="number" onChange={(e)=> setValue(parseFloat(e.target.value))} value={value} placeholder="Сумма..." width={450}/>
      <Select placeholder="Валюта" style={{ width: 150, marginLeft: "10px" }} value={currency} onChange={setCurrency}>
        {currencies.map((currency) => (
          <Select.Option value={currency} children={currency} />
        ))}
      </Select>
    </div>
  );
};

export default CurrencyInput;
