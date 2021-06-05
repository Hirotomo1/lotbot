import {createSelector} from "reselect"
import {IinitialState} from "../store/initialState"

const answerSelector = (state:IinitialState) => state.answer;

export const getAnswer = createSelector(
    [answerSelector],
    state => state
)