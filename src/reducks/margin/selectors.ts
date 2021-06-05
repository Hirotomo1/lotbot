import {createSelector} from "reselect"
import {IinitialState} from "../store/initialState"

const marginSelector = (state:IinitialState) => state.margin;


export const getMargin = createSelector(
    [marginSelector],
    state => state
)