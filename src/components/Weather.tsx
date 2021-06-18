import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { Button, Paper, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "../assets/styles/style.css";
import { useDispatch } from "react-redux";
import { changeLng, changeLat } from "../reducks/store";

const Weather: FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<{ [key: string]: string }>({});
  const [temp, settemp] = useState<{ [key: string]: number }>({});
  const [typecity, settypecity] = useState<string>("");
  const [city, setcity] = useState<string>("Tokyo");
  const [img, setimg] = useState<string>("");
  const [disc, setdisc] = useState<string>("");

  const citySelect = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setcity(typecity);
  };

  useEffect(() => {
    const appid: string = "";
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
      )
      .then((res) => {
        setValue(res.data);
        settemp(res.data.main);
        setimg(
          `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
        );
        setdisc(res.data.weather[0].description);
        dispatch(changeLng(res.data.coord.lon));
        dispatch(changeLat(res.data.coord.lat));
      });
  }, [city]);

  return (
    <div>
      <Paper className="paper">
        <form onSubmit={citySelect} className="elementcenter">
          <TextField
            placeholder="type city here"
            value={typecity}
            onChange={(e) => settypecity(e.target.value)}
          />
          <Button type="submit">
            <SendIcon />
          </Button>
        </form>
        <h4 className="fontcss">{value.name}</h4>
        <img src={img} alt="weather icon" className="imgcss" />
        <h5 className="fontcss">{disc}</h5>
        <div className="elementcenter">
          <p>
            最低気温 <br />
            {`${Math.floor(temp.temp_min - 273.15)}° C`}
          </p>
          <h4 className="fontcss">
            現在気温　
            <br />
            {`${Math.floor(temp.temp - 273.15)}° C`}
          </h4>
          <h5 className="fontcss">
            体感気温　
            <br />
            {`${Math.floor(temp.feels_like - 273.15)}° C`}
          </h5>
          <p>
            最高気温 <br />
            {`${Math.floor(temp.temp_max - 273.15)}° C`}
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default Weather;
