import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { changeWeatherApi } from "../reducks/store";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../assets/styles/style.css";

const ApiForm: FC = () => {
  const dispatch = useDispatch();

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    const value: string = String(event.target.value);
    switch (event.target.name) {
      case "weatherApi":
        dispatch(changeWeatherApi(value));
        break;
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
    <section className="apiwin">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="apiForm">
          <TextField
            id="filled-number"
            label="Weather Apiキー"
            type="text"
            name="weatherApi"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default ApiForm;
