import {
    createStore as reduxCreateStore,
    combineReducers
} from "redux"

import {MarginsReducer} from "../margins/reducers"
import {PercentageReducer} from "../percentages/reducers"
import {PipsReducer} from "../pipses/reducers"
import { AnswerReducer } from "../answers/reducers"

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