import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { Button, Paper, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "../assets/styles/style.css";

const Weather: FC = () => {
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
        <h6 className="fontcss">{value.name}</h6>
        <img src={img} alt="weather icon" className="imgcss" />
        <h6 className="fontcss">{disc}</h6>
        <div className="elementcenter">
          <p>
            Min <br />
            {`${Math.floor(temp.temp_min - 273.15)}° C`}
          </p>
          <h5 className="fontcss">
            現在気温　
            <br />
            {`${Math.floor(temp.temp - 273.15)}° C`}
          </h5>
          <h6 className="fontcss">
            体感気温　
            <br />
            {`${Math.floor(temp.feels_like - 273.15)}° C`}
          </h6>
          <p>
            Max <br />
            {`${Math.floor(temp.temp_max - 273.15)}° C`}
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default Weather;
