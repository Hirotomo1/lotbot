import * as Actions from "./actions";
import initialState from "../store/initialState";

export const LngsReducer = (
  state = initialState.lngs,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_LNG:
      return {
        ...state,
        lng: action.payload,
      };
    default:
      return state;
  }
};
