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

  const rateId: string = "4b3b37ce7b9a45b39e0bd1c4d557d578";

  useEffect(() => {
    axios
      .all([
        axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=${rateId}`
        ),
        axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=${rateId}`
        ),
        axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=${rateId}`
        ),
      ])
      .then(
        axios.spread((firstResponse, secondResponse, thirdResponse) => {
          dispatch(changeUsJpRate(firstResponse.data.rates.JPY)),
            dispatch(changeUsCaRate(secondResponse.data.rates.CAD)),
            dispatch(changeUsChRate(thirdResponse.data.rates.CHF));
        })
      );
  }, []);

  return (
    <div>
      <h1>Exchange Rate</h1>
      <h5>USDJPY : ￥ {usJpRate}</h5>
      <h5>USDCAD : $ {usCaRate}</h5>
      <h5>USDCHF : $ {usChRate}</h5>
    </div>
  );
};

export default RateWindow;
