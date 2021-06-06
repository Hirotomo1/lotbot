import * as Actions from "./actions"
import initialState from "../store/initialState"

export const AnswersReducer = (
  state = initialState.answers,
  action: { type: string; payload: number }
)  => {
  switch (action.type) {
    case Actions.DO_ANSWER:
      return {
        ...state,
        answer:action.payload
      };
    default:
      return state;
  }
}