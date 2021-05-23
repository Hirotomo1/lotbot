import * as Actions from "./actions"
import initialState from "../store/initialState"

export const MarginsReducer = (
  state = initialState.margin,
  action: { type: string; payload: any }
)  => {
  switch (action.type) {
    case Actions.CHANGE_MARGIN:
      return {
        state,
        ...action.payload
      };
    default:
      return state;
  }
}
