import * as Actions from "./actions"
import initialState from "../store/initialState"

export const AnswerReducer = (
  state = initialState,
  action: { type: string; payload: number }
)  => {
  switch (action.type) {
    case Actions.ANSWER:
      return {
        ...state,
        answer:action.payload
      };
    default:
      return state;
  }
}