import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMargin,
  changePips,
  changePercentage,
} from "../reducks/store/index";
import { RootState } from "../reducks/store/store";

const LotCulc: FC = () => {
  const dispatch = useDispatch();

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    const value: number = Number(event.target.value);
    switch (event.target.name) {
      case "margin":
        dispatch(changeMargin(value));
        break;
      case "tolerancePercentage":
        dispatch(changePercentage(value));
        break;
      case "pips":
        dispatch(changePips(value));
        break;
    }
  };

  return (
    <div>
      <div>
        最適Lot数:{}万通貨 (損失許容額:￥{})
      </div>
      <label>
        証拠金(円):
        <input type="text" name="margin" onChange={handleChange} />
      </label>
      <label>
        損失許容割合(%):
        <input type="text" name="tolerancePercentage" onChange={handleChange} />
      </label>
      <label>
        損切幅(pips):
        <input type="text" name="pips" onChange={handleChange} />
      </label>
      <div>
        <button>計算</button>
      </div>
    </div>
  );
};

export default LotCulc;
