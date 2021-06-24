import { createStore as reduxCreateStore, combineReducers } from "redux";

import { MarginsReducer } from "../margins/reducers";
import { PercentagesReducer } from "../percentages/reducers";
import { PipsesReducer } from "../pipses/reducers";
import { AnswersReducer } from "../answers/reducers";
import { LatsReducer } from "../lats/reducers";
import { LngsReducer } from "../lngs/reducers";

const rootReducer = combineReducers({
  margins: MarginsReducer,
  percentages: PercentagesReducer,
  pipses: PipsesReducer,
  answers: AnswersReducer,
  lngs: LngsReducer,
  lats: LatsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function createStore() {
  return reduxCreateStore(rootReducer);
}
