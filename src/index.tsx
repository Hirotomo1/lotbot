import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import UsdJpyLotCulc from "./components/UsdjpyLotCulc";
import GetUsdJpyRate from "./components/GetUsdJpyRate";

export const store = createStore();
const target = document.getElementById("lotgod");
const target2 = document.getElementById("usJpRateWin");

ReactDOM.render(
  <Provider store={store}>
    <UsdJpyLotCulc />
  </Provider>,
  target
);

ReactDOM.render(
  <Provider store={store}>
    <GetUsdJpyRate />
  </Provider>,
  target2
);
