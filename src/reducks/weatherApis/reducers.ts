import * as Actions from "./actions";
import initialState from "../store/initialState";

export const WeatherApisReducer = (
  state = initialState.weatherApis,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case Actions.CHANGE_WEATHERAPI:
      return {
        ...state,
        weatherApi: action.payload,
      };
    default:
      return state;
  }
};
