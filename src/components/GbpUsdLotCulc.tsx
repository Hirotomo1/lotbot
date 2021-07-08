import React, { FC, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AppState } from "../reducks/store/store";
import {
  changeMargin,
  changePips,
  changePercentage,
  changeGbUsRate,
  doAnswer,
} from "../reducks/store/index";
import { Button, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const LotCulc: FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const pips = useSelector((state: AppState) => state.pipses.pips);
  const margin = useSelector((state: AppState) => state.margins.margin);
  const answer = useSelector((state: AppState) => state.answers.answer);
  const percentage = useSelector(
    (state: AppState) => state.percentages.percentage
  );
  const gbpUsdRate = useSelector(
    (state: AppState) => state.gbpUsdRates.gbUsRate
  );
  const rateId: string = "";

  useEffect(() => {
    axios
      .get(
        `https://openexchangerates.org/api/latest.json?app_id=${rateId}&base=GBP`
      )
      .then((res) => {
        dispatch(changeGbUsRate(res.data.rates.USD));
      });
  }, []);

  const reviseMargin: number = useMemo(() => {
    return margin * percentage;
  }, [margin, percentage]);

  const answerLot: number = useMemo(() => {
    return reviseMargin / pips;
  }, [reviseMargin, pips]);

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
        dispatch(changePips(value * gbpUsdRate));
        break;
    }
  };

  const answerKeeper: () => void = () => {
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

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );

  const classes = useStyles();

  return (
    <section className="lotwin">
      <div>
        <h1>GBPUSD: ${gbpUsdRate}</h1>
        <div className="answin">
          <p>最適lot数{answer.toLocaleString()}万通貨</p>
          <p>損失許容額{reviseMargin.toLocaleString()}円</p>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="pramwin">
            <TextField
              id="filled-number"
              label="証拠金(円)"
              type="text"
              name="margin"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={handleChange}
            />
            <TextField
              id="filled-number"
              label="損失許容割合(%)"
              type="text"
              name="tolerancePercentage"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={handleChange}
            />
            <TextField
              id="filled-number"
              label="損切幅(pips)"
              type="text"
              name="pips"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={handleChange}
            />
          </div>
        </form>
        <div>
          <p>
            <Button variant="outlined" color="secondary" onClick={answerKeeper}>
              Calculation
            </Button>
          </p>
        </div>
        <p>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => push("/eurusd")}
          >
            ユーロドル
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => push("/")}
          >
            ドル円
          </Button>
        </p>
      </div>
    </section>
  );
};

export default LotCulc;
