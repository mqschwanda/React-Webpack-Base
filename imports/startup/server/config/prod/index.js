import path from 'path';
import express from 'express';
import { render as prettyjson } from 'prettyjson';

import { isProd, port } from '../../../../helpers';

export default (app) => { // only needed on production server, dev webpack handles this in the config
  if (isProd) {
    const publicDirName = 'public';

    const publicDir = path.resolve(__dirname, `../../../../../${publicDirName}`); // build the static public directory for the express app to use
    app.use(`/${publicDirName}`, express.static(publicDir)); // serve the public directory to the client

    const sendIndexHtml = (request, response) => {
      response.sendFile(path.resolve(`${publicDirName}`, 'index.html'));
    };
    app.get('*', sendIndexHtml); // catch all routes and pass to the index.html which passes to react router

    app.listen(port); // startup the server
    console.log(prettyjson(app.locals)); // log express app information
  }
};
