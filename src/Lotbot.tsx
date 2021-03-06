import React, { FC } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";

import { store, history } from "./reducks/store/store";
import UsdCadLotCulc from "./components/UsdCadLotCulc";
import UsdChfLotCulc from "./components/UsdChfLotCulc";
import UsdJpyLotCulc from "./components/UsdJpyLotCulc";

const Lotbot: FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Container>
          <Switch>
            <Route exact path="/" component={UsdJpyLotCulc} />
            <Route exact path="/usdcad" component={UsdCadLotCulc} />
            <Route exact path="/usdchf" component={UsdChfLotCulc} />
            <Route render={() => <h1>Not Found...</h1>} />
          </Switch>
        </Container>
      </ConnectedRouter>
    </Provider>
  );
};

export default Lotbot;
