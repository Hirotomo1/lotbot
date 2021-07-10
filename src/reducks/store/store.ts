import { routerMiddleware, connectRouter } from "connected-react-router";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

import { MarginsReducer } from "../margins/reducers";
import { PercentagesReducer } from "../percentages/reducers";
import { PipsesReducer } from "../pipses/reducers";
import { AnswersReducer } from "../answers/reducers";
import { UsdJpyRatesReducer } from "../usdJpyRates/reducers";
import { UsdChfRatesReducer } from "../usdChfRates/reducers";
import { UsdCadRatesReducer } from "../usdCadRates/reducers";
import { CadJpyRatesReducer } from "../cadJpyRates/reducers";
import { ChfJpyRatesReducer } from "../chfJpyRates/reducers";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  margins: MarginsReducer,
  percentages: PercentagesReducer,
  pipses: PipsesReducer,
  answers: AnswersReducer,
  usdJpyRates: UsdJpyRatesReducer,
  usdChfRates: UsdChfRatesReducer,
  usdCadRates: UsdCadRatesReducer,
  cadJpyRates: CadJpyRatesReducer,
  chfjpyRates: ChfJpyRatesReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history));
  },
});
