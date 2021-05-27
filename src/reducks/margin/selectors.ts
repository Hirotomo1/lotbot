import {createSelector} from "reselect"
import initialState from "../store/initialState"

const marginSelector = (state=initialState) => state.margin;

export const getMargin = createSelector(
    [marginSelector],
    state => state
)