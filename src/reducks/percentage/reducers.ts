import * as Actions from "./actions"
import initialState from "../store/initialState"

export const PercentageReducer = (
  state = initialState.percentage,
  action: { type: string; payload: any }
)  => {
  switch (action.type) {
    case Actions.CHANGE_PERCENTAGE:
      return {
        state,
        ...action.payload
      };
    default:
      return state;
  }
}

