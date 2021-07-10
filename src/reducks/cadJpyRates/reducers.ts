import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CadJpyRatesReducer = (
  state = initialState.cadJpyRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_CAJPRATE:
      return {
        ...state,
        caJpRate: action.payload,
      };
    default:
      return state;
  }
};
