import path from 'path';
import express from 'express';
import { render as prettyjson } from 'prettyjson';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import { isProd, port } from '../../../helpers';
import connectAPI from '../api';

const prodServer = (app) => { // only needed on production server
  const publicDir = path.resolve(__dirname, '../../../../public');

  app.use('/', express.static(publicDir));
  app.listen(port);

  console.log(prettyjson(app.locals));
};


export default (app) => {
  // const app = expressObj || express(); // use existing express app object or import new instance;

  app.use(bodyParser.urlencoded({ extended: 'true' })); // parsing url encoded data using querystring library
  app.use(bodyParser.json({ type: 'json' })); // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
  app.use(methodOverride()); // middleware function to override the req.method property

  connectAPI(app); // connect api routes using express app object
  if (isProd) prodServer(app); // run production server
};
