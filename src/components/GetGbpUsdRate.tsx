import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeGbUsRate } from "../reducks/store";
import { AppState } from "../reducks/store/store";

const GetGbpUsdRate: FC = () => {
  const gbpUsdRate = useSelector(
    (state: AppState) => state.gbpUsdRates.gbUsRate
  );
  const dispatch = useDispatch();
  const rateId: string = "f69360fe369a4948b4f5c012d275e2f3";

  useEffect(() => {
    axios
      .get(
        `https://openexchangerates.org/api/latest.json?app_id=${rateId}&base=GBP`
      )
      .then((res) => {
        dispatch(changeGbUsRate(res.data.rates.JPY));
      });
  }, []);

  console.log(gbpUsdRate, "gbpUsd");

  return <div>GBPUSD: ${gbpUsdRate}</div>;
};

export default GetGbpUsdRate;
