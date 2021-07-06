import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeRate } from "../reducks/store";
import { AppState } from "../reducks/store/store";

const GetRate: FC = () => {
  const usdJpyRate = useSelector((state: AppState) => state.exRates.rate);
  const dispatch = useDispatch();
  const rateId: string = "";

  useEffect(() => {
    axios
      .get(`https://openexchangerates.org/api/latest.json?app_id=${rateId}`)
      .then((res) => {
        dispatch(changeRate(res.data.rates.JPY));
      });
  }, []);

  return <div>USDUPY: ￥{usdJpyRate}</div>;
};

export default GetRate;
