import React, { useEffect } from "react";
import Layout from "antd/es/layout";
import { Route, Switch, Redirect } from "react-router";
import { Currencies, Converter } from "./pages";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { IStore, thunkDispatch } from "./store";
import { currenciesActions } from "./store/actions";

type IProps = {
  selectedCurrency: string;
}

const App: React.FC<IProps> = (props) => {
  
  useEffect(() => {
    thunkDispatch(currenciesActions.fetchCurrency());
  }, [props.selectedCurrency])

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header
        style={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-around",
          padding: "15px",
        }}
      >
        <span />
        <NavLink
          exact
          to="/currencies"
          className="ant-btn"
          activeClassName="ant-btn-dangerous"
        >
          Currencies
        </NavLink>
        <NavLink
          exact
          to="/converter"
          className="ant-btn"
          activeClassName="ant-btn-dangerous"
        >
          Converter
        </NavLink>
        <span />
      </Layout.Header>
      <Layout.Content style={{ padding: "35px" }}>
        <Switch>
          <Route exact path="/currencies" component={Currencies} />
          <Route exact path="/converter" component={Converter} />
          <Redirect exact from="/" to="/currencies" />
          <Route path="*" render={() => <div>Not found!</div>} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
}

export default connect((state: IStore) => ({selectedCurrency: state.user.selectedCurrency}))(App);
