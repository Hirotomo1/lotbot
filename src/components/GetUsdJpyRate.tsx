import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeUsJpRate } from "../reducks/store";
import { AppState } from "../reducks/store/store";

const GetUsdJpyRate: FC = () => {
  const usdJpyRate = useSelector(
    (state: AppState) => state.usdJpyRates.usJpRate
  );
  const dispatch = useDispatch();
  const rateId: string = "f69360fe369a4948b4f5c012d275e2f3";

  useEffect(() => {
    axios
      .get(`https://openexchangerates.org/api/latest.json?app_id=${rateId}`)
      .then((res) => {
        dispatch(changeUsJpRate(res.data.rates.JPY));
      });
  }, []);

  return <div>USDJPY: ￥{usdJpyRate}</div>;
};

export default GetUsdJpyRate;
