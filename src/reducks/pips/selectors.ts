import {createSelector} from "reselect"
import {IinitialState} from "../store/initialState"

const pipsSelector = (state:IinitialState) => state.pips;

export const getPips = createSelector(
    [pipsSelector],
    state => state
)