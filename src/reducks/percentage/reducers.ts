import * as Actions from "./actions"
import initialState from "../store/initialState"

export const PercentageReducer = (
  state = initialState,
  action: { type: string; payload: number }
)  => {
  switch (action.type) {
    case Actions.CHANGE_PERCENTAGE:
      return {
        ...state,
        percentage: action.payload / 100
      };
    default:
      return state;
  }
}