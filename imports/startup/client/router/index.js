import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { App } from 'layouts';
import { history } from '../../../reducers/router';
// can dispatch navigation actions from anywhere!
// import { push } from 'react-router-redux';
// store.dispatch(push('/foo'))


const ReactRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path='/' component={App}/>
      <Route path='/home' component={App}/>
      <Route path='/theme' component={App}/>
      <Route path='/about' component={App}/>
    </Switch>
  </ConnectedRouter>
);
export default ReactRouter;
