import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Card } from "reactstrap";
import axios from "axios";
import {
  changeUsJpRate,
  changeUsChRate,
  changeUsCaRate,
} from "../reducks/store/index";
import { AppState } from "@/reducks/store/store";

const RateWindow: FC = () => {
  const dispatch = useDispatch();
  const usJpRate = useSelector((state: AppState) => state.usdJpyRates.usJpRate);
  const usCaRate = useSelector((state: AppState) => state.usdCadRates.usCaRate);
  const usChRate = useSelector((state: AppState) => state.usdChfRates.usChRate);

  useEffect(() => {
    const rateId: string = "";
    axios
      .get(`https://openexchangerates.org/api/latest.json?app_id=${rateId}`)
      .then((res) => {
        dispatch(changeUsJpRate(res.data.rates.JPY)),
          dispatch(changeUsCaRate(res.data.rates.CAD)),
          dispatch(changeUsChRate(res.data.rates.CHF));
      });
  }, []);

  return (
    <>
      <Card className="card-header">Exchange Rate</Card>
      <Table className="table">
        <thead>
          <tr id="ratewin_list">
            <th scope="col"></th>
            <th scope="col">USDJPY</th>
            <th scope="col">USDCAD</th>
            <th scope="col">USDCHF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Rate</th>
            <td>¥ {usJpRate.toFixed(3)}</td>
            <td>$ {usCaRate.toFixed(5)}</td>
            <td>$ {usChRate.toFixed(5)}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default RateWindow;
