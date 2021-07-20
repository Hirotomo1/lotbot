import React, { FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "reactstrap";
import { Button, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  changeMargin,
  changePips,
  changePercentage,
  changeChJpRate,
  doAnswer,
} from "../reducks/store/index";
import { AppState } from "../reducks/store/store";

const UsdChfLotCulc: FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const pips = useSelector((state: AppState) => state.pipses.pips);
  const margin = useSelector((state: AppState) => state.margins.margin);
  const answer = useSelector((state: AppState) => state.answers.answer);
  const percentage = useSelector(
    (state: AppState) => state.percentages.percentage
  );
  const usdChfRate = useSelector(
    (state: AppState) => state.usdChfRates.usChRate
  );
  const chfJpyRate = useSelector(
    (state: AppState) => state.chfjpyRates.chJpRate
  );

  const reviseMargin: number = useMemo(() => {
    return margin * percentage;
  }, [margin, percentage]);

  const answerLot: number = useMemo(() => {
    return reviseMargin / pips;
  }, [reviseMargin, pips]);

  const revisePips: number = useMemo(() => {
    return usdChfRate * chfJpyRate;
  }, [usdChfRate, chfJpyRate]);

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
        dispatch(changePips(value * revisePips));
        break;
      case "chfjpy":
        dispatch(changeChJpRate(value));
        dispatch(changePips(value * revisePips));
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
    } else if (chfJpyRate <= 0) {
      alert("スイスフラン / 円を入力してください");
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
    <Card className="card">
      <Card className="card-header">UsdChf LotCulc</Card>
      <Card className="card-body">
        <h1>USDCHF: ${usdChfRate.toFixed(5)}</h1>
        <div className="answin">
          <p>最適lot数{answer.toFixed(3).toLocaleString()}万通貨</p>
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
            <TextField
              id="filled-number"
              label="スイスフラン / 円 レート(円)"
              type="text"
              name="chfjpy"
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
            onClick={() => push("/")}
          >
            ドル / 円
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => push("/usdcad")}
          >
            ドル / カナダドル
          </Button>
          <Button variant="contained" color="default">
            ドル / スイスフラン
          </Button>
        </p>
      </Card>
    </Card>
  );
};

export default UsdChfLotCulc;
