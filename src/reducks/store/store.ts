import {
    createStore as reduxCreateStore,
    combineReducers
} from "redux"

import {MarginsReducer} from "../margin/reducers"
import {PercentageReducer} from "../percentage/reducers"
import {PipsReducer} from "../pips/reducers"
import { AnswerReducer } from "../answer/reducers"

const rootReducer = combineReducers({
            margin: MarginsReducer,
            percentage: PercentageReducer,
            pips: PipsReducer,
            answer: AnswerReducer,
        })

export type AppState = ReturnType<typeof rootReducer>

export default function createStore() {
    return reduxCreateStore(
        rootReducer
    )
}