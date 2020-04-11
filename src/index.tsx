import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

console.log(process.env.PUBLIC_URL);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
