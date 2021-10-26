import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TimeGraph from '../pages/TimeGraph';

const Routes = () => (
  <Switch>
    {/* <Route
      exact
      path="/"
      component={TimeGraph}
    /> */}
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
