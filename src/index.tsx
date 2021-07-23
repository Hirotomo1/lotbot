import React from "react";
import ReactDOM from "react-dom";
import Rate from "./Rate";
import Lotbot from "./Lotbot";
import SnsShare from "./components/SnsShare";
import Notice from "./components/Notice";
import UpdateInformation from "./components/UpdateInformation";

const target = document.getElementById("lotgod");
const target2 = document.getElementById("ratewin");
const target3 = document.getElementById("snswin");
const target4 = document.getElementById("noticewin");
const target5 = document.getElementById("updatewin");

ReactDOM.render(<Lotbot />, target);
ReactDOM.render(<Rate />, target2);
ReactDOM.render(<SnsShare />, target3);
ReactDOM.render(<Notice />, target4);
ReactDOM.render(<UpdateInformation />, target5);
