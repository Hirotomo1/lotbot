import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import LotCulc from "./components/LotCulc";
import Weather from "./components/Weather";

export const store = createStore();
const target = document.getElementById("app");
const target2 = document.getElementById("weatherWin");

ReactDOM.render(
  <Provider store={store}>
    <LotCulc />
  </Provider>,
  target
);

ReactDOM.render(<Weather />, target2);
