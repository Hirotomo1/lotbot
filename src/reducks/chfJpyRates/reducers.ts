import * as Actions from "./actions";
import initialState from "../store/initialState";

export const ChfJpyRatesReducer = (
  state = initialState.chfJpyRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_CHJPRATE:
      return {
        ...state,
        chJpRate: action.payload,
      };
    default:
      return state;
  }
};
