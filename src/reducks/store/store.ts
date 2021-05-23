import {
    createStore as reduxCreateStore,
    combineReducers
} from "redux"

import {MarginsReducer} from "../margin/reducers"
import {PercentageReducer} from "../percentage/reducers"
import {PipsReducer} from "../pips/reducers"

export type RootState = {
    margin: number
}

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            margin: MarginsReducer,
            percentage: PercentageReducer,
            pips: PipsReducer
        })
    )
}