import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import connectAPI from '../../api';

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: 'true' })); // parsing url encoded data using querystring library
  app.use(bodyParser.json({ type: 'json' })); // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
  app.use(methodOverride()); // middleware function to override the req.method property

  connectAPI(app); // connect api routes using express app object
};
