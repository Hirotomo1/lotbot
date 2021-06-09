import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import LotCulc from "./components/LotCulc";

export const store = createStore();
const target = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <LotCulc />
  </Provider>,
  target
);
