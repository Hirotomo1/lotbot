import * as Actions from "./actions";
import initialState from "../store/initialState";

export const GbpUsdRatesReducer = (
  state = initialState.gbpUsdRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_RATE:
      return {
        ...state,
        gbUsRate: action.payload,
      };
    default:
      return state;
  }
};
