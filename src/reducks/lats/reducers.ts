import * as Actions from "./actions";
import initialState from "../store/initialState";

export const LatsReducer = (
  state = initialState.lats,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case Actions.CHANGE_LAT:
      return {
        ...state,
        lat: action.payload,
      };
    default:
      return state;
  }
};
