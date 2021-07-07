import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import LotCulc from "./components/LotCulc";
import Weather from "./components/Weather";
import Map from "./components/Map";
import ApiForm from "./components/ApiForm";
import GetRate from "./components/GetExchangeRate";

export const store = createStore();
const target = document.getElementById("lotgod");
const target2 = document.getElementById("weatherWin");
const target3 = document.getElementById("mapWin");
const target4 = document.getElementById("apiWin");
const target5 = document.getElementById("exWin");

ReactDOM.render(
  <Provider store={store}>
    <LotCulc />
  </Provider>,
  target
);

ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>,
  target2
);

ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  target3
);

ReactDOM.render(
  <Provider store={store}>
    <ApiForm />
  </Provider>,
  target4
);

ReactDOM.render(
  <Provider store={store}>
    <GetRate />
  </Provider>,
  target5
);
