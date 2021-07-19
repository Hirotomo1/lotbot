import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsdCadRatesReducer = (
  state = initialState.usdCadRates,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_USCARATE:
      return {
        ...state,
        usCaRate: action.payload,
      };
    default:
      return state;
  }
};
