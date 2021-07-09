import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsdChfRatesReducer = (
  state = initialState.usdChfRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_USCHRATE:
      return {
        ...state,
        usChRate: action.payload,
      };
    default:
      return state;
  }
};
