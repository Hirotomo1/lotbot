import * as Actions from "./actions";
import initialState from "../store/initialState";

export const exRatesReducer = (
  state = initialState.exRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    default:
      return state;
  }
};
