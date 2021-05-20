import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import LotCulc from "./components/LotCulc";

const target = document.getElementById("app");

ReactDOM.render(<LotCulc />, target);
