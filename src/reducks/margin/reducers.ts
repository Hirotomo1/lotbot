import * as Actions from "./actions"
import initialState from "../store/initialState"

export const MarginsReducer = (
  state = initialState,
  action: { type:string, payload :number }
)  => {
  switch (action.type) {
    case Actions.CHANGE_MARGIN:
      return {
        ...state,
        margin: action.payload
      }
    default:
      return state;
  }
}
