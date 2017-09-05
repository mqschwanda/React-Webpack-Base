/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
**/

import React from 'react';
import { normalize } from 'modules'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'reducers';
import ReactRouter from './router';

render(
  <Provider store={store}>
    <ReactRouter/>
  </Provider>,
  document.getElementById('app'),
);

if (module && module.hot) module.hot.accept();
