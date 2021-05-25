import * as Actions from "./actions"
import initialState from "../store/initialState"

export const MarginsReducer = (
  state = initialState.margin,
  action: { type:string, margin:number }
)  => {
  switch (action.type) {
    case Actions.CHANGE_MARGIN:
      return Object.assign ({}, state,{margin: action.margin})
      break;
    default:
      return state;
  }
}
