import {createSelector} from "reselect"
import {IinitialState} from "../store/initialState"

const percentageSelector = (state:IinitialState) => state.percentage;

export const getPercentage = createSelector(
    [percentageSelector],
    state => state
)