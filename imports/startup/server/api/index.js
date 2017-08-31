/* eslint-disable global-require, no-param-reassign */

export default (app) => {
  const restful = require('node-restful');

  const { mongoose } = restful;
  mongoose.Promise = require('bluebird');

  const database = process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackBase';
  mongoose.connect(database, {
    useMongoClient: true,
    /* other options */
  });

  const schema = new mongoose.Schema({
    attribute: { // atrribute on the record
      type: String,
      default: 'attribute',
    },
    date: { // date the record was created in the application
      type: Date,
      default: new Date(),
    },
  });

  const methods = ['get', 'post', 'put', 'delete'];
  const API = app.resource = restful.model(
    'collection',
    schema,
  ).methods(methods);

  API.register(app, '/api/collection');
};
