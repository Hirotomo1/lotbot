import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import LotCulc from "./components/LotCulc";
import Weather from "./components/Weather";
import Map from "./components/Map";

export const store = createStore();
const target = document.getElementById("app");
const target2 = document.getElementById("weatherWin");
const target3 = document.getElementById("mapWin");

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
