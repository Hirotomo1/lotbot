import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducks/store/store";

const LotCulc: FC = () => {
  const [margin, setMargin] = useState<number>(0);
  const [tolerancePercentage, setTolerancePercentage] = useState<number>(0);
  const [pips, setPips] = useState<number>(0);
  const [lot, setLot] = useState<number>(0);
  const [displayMargin, setDisplayMargin] = useState<number>(0);

  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  console.log(selector.margin);

  const truePercentage: number = tolerancePercentage / 100;

  const truePips: number = pips * 100;

  const toleranceMargin: number = margin * truePercentage;

  const answerLot = () => {
    setLot(toleranceMargin / truePips);
    setDisplayMargin(toleranceMargin);
  };

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    const value: number = Number(event.target.value);
    switch (event.target.name) {
      case "margin":
        setMargin(value);
        break;
      case "tolerancePercentage":
        setTolerancePercentage(value);
        break;
      case "pips":
        setPips(value);
        break;
    }
  };

  return (
    <div>
      <div>
        最適Lot数:{lot}万通貨 (損失許容額:￥{displayMargin})
      </div>
      <label>
        証拠金(円):
        <input type="text" name="margin" onChange={handleChange} />
      </label>
      <label>
        損失許容割合(%):
        <input
          type="text"
          name="tolerancePercentage"
          onChange={() => handleChange}
        />
      </label>
      <label>
        損切幅(pips):
        <input type="text" name="pips" onChange={handleChange} />
      </label>
      <div>
        <button onClick={answerLot}>計算</button>
      </div>
    </div>
  );
};

export default LotCulc;
