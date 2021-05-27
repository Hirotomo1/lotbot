import {createSelector} from "reselect"
import initialState from "../store/initialState"

const percentageSelector = (state=initialState) => state.percentage;

export const getPercentage = createSelector(
    [percentageSelector],
    state => state
)