import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../reducks/store/store";
import {
  changeMargin,
  changePips,
  changePercentage,
  doAnswer,
} from "../reducks/store/index";
import "../assets/styles/style.css";

const LotCulc: FC = () => {
  const dispatch = useDispatch();

  const pips = useSelector((state: AppState) => state.pipses.pips);
  const margin = useSelector((state: AppState) => state.margins.margin);
  const answer = useSelector((state: AppState) => state.answers.answer);
  const percentage = useSelector(
    (state: AppState) => state.percentages.percentage
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
    if (margin <= 0) {
      alert("証拠金を入力してください");
    } else if (percentage <= 0) {
      alert("損失許容割合を入力してください");
    } else if (pips <= 0) {
      alert("損切幅を入力してください");
    } else {
      dispatch(doAnswer(answerLot));
    }
  };

  return (
    <section className="lotwin">
      <div>
        <div className="answin">
          <p>最適lot数{answer}万通貨</p>
          <p>損失許容額{reviseMargin}円</p>
        </div>
        <div className="pramwin">
          <label>
            証拠金(円):
            <input type="text" name="margin" onChange={handleChange} />
          </label>
          <label>
            損失許容割合(%):
            <input
              type="text"
              name="tolerancePercentage"
              onChange={handleChange}
            />
          </label>
          <label>
            損切幅(pips):
            <input type="text" name="pips" onChange={handleChange} />
          </label>
        </div>
        <div>
          <p>
            <a className="ansbtn cubic" onClick={answerKeeper}>
              <span className="hovering">( ﾟДﾟ)</span>
              <span className="default">計算</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LotCulc;
