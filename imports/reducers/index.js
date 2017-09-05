/* eslint-disable no-console */

import { createStore } from 'redux';
import { isDev } from 'helpers';
import reducers from './reducers';
import { default as middlewares } from './middlewares';

const store = createStore(reducers, middlewares);

if (isDev) {
  store.subscribe(() => { console.log('store change', store.getState()); });
}

export default store;
