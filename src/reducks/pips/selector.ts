import {createSelector} from "reselect"
import initialState from "../store/initialState"

const pipsSelector = (state=initialState) => state.pips;

export const getPips = createSelector(
    [pipsSelector],
    state => state
)