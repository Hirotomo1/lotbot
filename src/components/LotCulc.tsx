import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducks/store/store";
import {
  changeMargin,
  changePips,
  changePercentage,
  doAnswer,
} from "../reducks/store/index";

const LotCulc: FC = () => {
  const dispatch = useDispatch();

  const pips = useSelector((state: AppState) => state.pips.pips);
  const margin = useSelector((state: AppState) => state.margin.margin);
  const answer = useSelector((state: AppState) => state.answer.answer);
  const percentage = useSelector(
    (state: AppState) => state.percentage.percentage
  );

  const reviseMargin: number = margin * percentage;

  const answerLot: number = reviseMargin / pips;

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

  const answerKeeper = () => {
    if (reviseMargin > 0) {
      dispatch(doAnswer(answerLot));
    } else {
      alert("数値を入力してください");
    }
  };

  return (
    <div>
      <div>
        <p>最適lot数{answer}万通貨</p>
        <p>損失許容額{reviseMargin}円</p>
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
        <p>
          <button onClick={answerKeeper}>計算</button>
        </p>
      </div>
    </div>
  );
};

export default LotCulc;
