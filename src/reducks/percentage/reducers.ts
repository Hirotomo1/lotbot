import * as Actions from "./actions"
import initialState from "../store/initialState"

export const PercentageReducer = (
  state = initialState.percentage,
  action: { type: string; payload: number }
)  => {
  switch (action.type) {
    case Actions.CHANGE_PERCENTAGE:
      return {
        state,
        action
      };
    default:
      return state;
  }
}

