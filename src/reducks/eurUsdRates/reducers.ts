import * as Actions from "./actions";
import initialState from "../store/initialState";

export const EurUsdRatesReducer = (
  state = initialState.eurUsdRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_RATE:
      return {
        ...state,
        euUsRate: action.payload,
      };
    default:
      return state;
  }
};
