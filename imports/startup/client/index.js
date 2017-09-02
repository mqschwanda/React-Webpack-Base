/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
**/

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { App } from 'layouts';
import { normalize } from 'modules'; // eslint-disable-line no-unused-vars
import store from 'reducers';

render(
  <Provider {...{ store }}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);

if (module && module.hot) module.hot.accept();
