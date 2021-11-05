import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TimeGraph from '../pages/TimeGraph';
import Wallet from '../pages/Wallet';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/carteira"
      component={Wallet}
    />
    <Route
      exact
      path="/graficos/:id"
      component={TimeGraph}
    />
    {/* <Route
      component={NotFound}
    /> */}
  </Switch>
);

export default Routes;
