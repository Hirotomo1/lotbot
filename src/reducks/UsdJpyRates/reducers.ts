import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsdJpyRatesReducer = (
  state = initialState.usdJpyRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_USJPRATE:
      return {
        ...state,
        usJpRate: action.payload,
      };
    default:
      return state;
  }
};
