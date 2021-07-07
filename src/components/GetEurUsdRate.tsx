import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeEuUsRate } from "../reducks/store";
import { AppState } from "../reducks/store/store";

const GetEurUsdRate: FC = () => {
  const eurUsdRate = useSelector(
    (state: AppState) => state.eurUsdRates.euUsRate
  );
  const dispatch = useDispatch();
  const rateId: string = "f69360fe369a4948b4f5c012d275e2f3";

  useEffect(() => {
    axios
      .get(
        `https://openexchangerates.org/api/latest.json?app_id=${rateId}&base=EUR`
      )
      .then((res) => {
        dispatch(changeEuUsRate(res.data.rates.USD));
      });
  }, []);

  console.log(eurUsdRate, "eurUsd");

  return <div>EURUSD: ${eurUsdRate}</div>;
};

export default GetEurUsdRate;
