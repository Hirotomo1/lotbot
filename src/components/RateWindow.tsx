import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  changeUsJpRate,
  changeUsChRate,
  changeUsCaRate,
} from "../reducks/store/index";
import { AppState } from "@/reducks/store/store";

const RateWindow: FC = () => {
  const dispatch = useDispatch();
  const usJpRate = useSelector((state: AppState) => state.usdJpyRates.usJpRate);
  const usCaRate = useSelector((state: AppState) => state.usdCadRates.usCaRate);
  const usChRate = useSelector((state: AppState) => state.usdChfRates.usChRate);

  useEffect(() => {
    const rateId: string = "";
    axios
      .get(`https://openexchangerates.org/api/latest.json?app_id=${rateId}`)
      .then((res) => {
        dispatch(changeUsJpRate(res.data.rates.JPY)),
          dispatch(changeUsCaRate(res.data.rates.CAD)),
          dispatch(changeUsChRate(res.data.rates.CHF));
      });
  }, []);

  return (
    <div className="ratewin_div">
      <h6 id="ratewin_title">Exchange Rate</h6>
      <ul id="ratewin_list">
        <li>USDJPY : ¥ {usJpRate.toFixed(3)}</li>
        <li>USDCAD : $ {usCaRate.toFixed(5)}</li>
        <li>USDCHF : $ {usChRate.toFixed(5)}</li>
      </ul>
    </div>
  );
};

export default RateWindow;
