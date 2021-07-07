import { createStore as reduxCreateStore, combineReducers } from "redux";

import { MarginsReducer } from "../margins/reducers";
import { PercentagesReducer } from "../percentages/reducers";
import { PipsesReducer } from "../pipses/reducers";
import { AnswersReducer } from "../answers/reducers";
import { UsdJpyRatesReducer } from "../UsdJpyRates/reducers";
import { GbpUsdRatesReducer } from "../gbpUsdRates/reducers";
import { EurUsdRatesReducer } from "../eurUsdRates/reducers";

const rootReducer = combineReducers({
  margins: MarginsReducer,
  percentages: PercentagesReducer,
  pipses: PipsesReducer,
  answers: AnswersReducer,
  usdJpyRates: UsdJpyRatesReducer,
  gbpUsdRates: GbpUsdRatesReducer,
  eurUsdRates: EurUsdRatesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function createStore() {
  return reduxCreateStore(rootReducer);
}
