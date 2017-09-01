import path from 'path';
import { render as prettyjson } from 'prettyjson';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import connectAPI from '../api';

export default (express) => {
  const app = express || require('express')(); // use existing express app object or import new instance

  app.use(bodyParser.urlencoded({ extended: 'true' })); // parsing url encoded data using querystring library
  app.use(bodyParser.json({ type: 'json' })); // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
  app.use(methodOverride()); // middleware function to override the req.method property

  connectAPI(app); // connect api routes using express app object

  if (process.env.NODE_ENV === 'production') { // dev server does not need
    const publicDir = path.resolve(__dirname, '../../../public');
    app.use('/', express.static(publicDir));
    app.listen(process.env.PORT || 8080);
    console.log(prettyjson(app.locals));
  }
};
