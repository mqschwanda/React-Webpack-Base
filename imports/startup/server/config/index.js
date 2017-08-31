import path from 'path';
import { render as prettyjson } from 'prettyjson';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import connectAPI from '../api';

export default (express) => {
  const app = express || require('express')();

  app.use(bodyParser.urlencoded({ extended: 'true' }));
  app.use(bodyParser.json({ type: 'json' }));
  app.use(methodOverride());

  connectAPI(app); // connect api routes using express app object

  if (process.env.NODE_ENV === 'production') {
    const publicDir = path.resolve(__dirname, '../../../public');
    app.use('/', express.static(publicDir));
    app.listen(process.env.PORT || 8080);
    console.log(prettyjson(app.locals));
  }
};
