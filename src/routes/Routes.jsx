import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    <Route
      path="*"
      element={<Redirect to="/carteira" />}
    />
  </Switch>
);

export default Routes;
