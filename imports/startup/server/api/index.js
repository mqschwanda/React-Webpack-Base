/* eslint-disable no-param-reassign */

import restful from 'node-restful';
import bluebird from 'bluebird';

const config = {
  uri: 'mongodb://localhost/ReactWebpackBase',
};

export default (app) => {
  const { mongoose } = restful;
  mongoose.Promise = bluebird;

  const database = process.env.MONGODB_URI || config.uri;
  mongoose.connect(database, { useMongoClient: true });

  function registerCollection({ ...options }) {
    const { name } = options;
    const schema = new mongoose.Schema({
      ...options.schema,
      ...{ createdOn: { type: Date, default: new Date() } },
    });
    const methods = options.methods || ['get', 'post', 'put', 'delete'];
    const API = app.resource
              = restful.model(`${name}`, schema).methods(methods);

    API.register(app, `/api/${name}`);
  }

  registerCollection({ name: 'collection' });
};
