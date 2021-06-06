import {
    createStore as reduxCreateStore,
    combineReducers
} from "redux"

import {MarginsReducer} from "../margin/reducers"
import {PercentageReducer} from "../percentage/reducers"
import {PipsReducer} from "../pips/reducers"
import { AnswerReducer } from "../answer/reducers"

const rootReducer = combineReducers({
            margins: MarginsReducer,
            percentages: PercentageReducer,
            pipses: PipsReducer,
            answers: AnswerReducer,
        })

export type AppState = ReturnType<typeof rootReducer>

export default function createStore() {
    return reduxCreateStore(
        rootReducer
    )
}