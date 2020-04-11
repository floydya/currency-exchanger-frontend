import React from "react";
import List from "antd/es/list";
import Button from "antd/es/button";

interface IProps {
  favorites: string[];
  onChange: (currency: string) => void;
  removeFavorite: (currency: string) => void;
}

const FavoritesList: React.FC<IProps> = ({
  favorites,
  onChange,
  removeFavorite,
}) => (
  <List
    style={{ marginTop: "82px" }}
    size="large"
    header={
      <div style={{ fontWeight: "bold", textAlign: "center" }}>Favorites</div>
    }
    bordered
    dataSource={favorites}
    renderItem={(item: string) => (
      <List.Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button type="link" onClick={onChange.bind(null, item)}>
          {item}
        </Button>
        <Button danger type="link" onClick={removeFavorite.bind(null, item)}>
          Remove
        </Button>
      </List.Item>
    )}
  />
);

export default FavoritesList;
