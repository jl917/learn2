import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Scan from '../page/scan';
import Main from '../page';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/scan" component={Scan} />
  </Switch>
);

export default Router;
