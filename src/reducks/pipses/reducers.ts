import * as Actions from "./actions"
import initialState from "../store/initialState"

export const PipsReducer = (
  state = initialState.pipses,
  action: { type: string; payload: number }
)  => {
  switch (action.type) {
    case Actions.CHANGE_PIPS:
      return {
        ...state,
        pips: action.payload * 100
      };
    default:
      return state;
  }
}