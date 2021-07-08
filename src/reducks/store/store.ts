import { routerMiddleware, connectRouter } from "connected-react-router";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

import { MarginsReducer } from "../margins/reducers";
import { PercentagesReducer } from "../percentages/reducers";
import { PipsesReducer } from "../pipses/reducers";
import { AnswersReducer } from "../answers/reducers";
import { UsdJpyRatesReducer } from "../UsdJpyRates/reducers";
import { GbpUsdRatesReducer } from "../gbpUsdRates/reducers";
import { EurUsdRatesReducer } from "../eurUsdRates/reducers";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  margins: MarginsReducer,
  percentages: PercentagesReducer,
  pipses: PipsesReducer,
  answers: AnswersReducer,
  usdJpyRates: UsdJpyRatesReducer,
  gbpUsdRates: GbpUsdRatesReducer,
  eurUsdRates: EurUsdRatesReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history));
  },
});
