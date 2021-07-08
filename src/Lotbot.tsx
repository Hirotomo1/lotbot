import React, { FC } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";

import { store, history } from "./reducks/store/store";
import EurUsdLotCulc from "./components/EurUsdLotCulc";
import GbpUsdLotCulc from "./components/GbpUsdLotCulc";
import UsdJpyLotCulc from "./components/UsdjpyLotCulc";

const Lotbot: FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Container>
          <Switch>
            <Route exact path="/" component={UsdJpyLotCulc} />
            <Route exact path="/eurusd" component={EurUsdLotCulc} />
            <Route exact path="/gbpusd" component={GbpUsdLotCulc} />
            <Route render={() => <h1>Not Found...</h1>} />
          </Switch>
        </Container>
      </ConnectedRouter>
    </Provider>
  );
};

export default Lotbot;
