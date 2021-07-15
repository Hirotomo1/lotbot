import React, { FC } from "react";
import { Provider } from "react-redux";
import RateWindow from "./components/RateWindow";

import { store } from "./reducks/store/store";

const Rate: FC = () => {
  return (
    <Provider store={store}>
      <RateWindow />
    </Provider>
  );
};

export default Rate;
