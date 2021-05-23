import * as Actions from "./actions"
import initialState from "../store/initialState"

export const PipsReducer = (
  state = initialState.pips,
  action: { type: string; payload: any }
)  => {
  switch (action.type) {
    case Actions.CHANGE_PIPS:
      return {
        state,
        ...action.payload
      };
    default:
      return state;
  }
}