/* eslint-disable no-param-reassign */

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import collections from './collections';
import mapRestApi from './rest';

const MONGODB_URI = 'mongodb://localhost/ReactWebpackBase';
mongoose.Promise = bluebird;

const database = process.env.MONGODB_URI || MONGODB_URI;
mongoose.connect(database, { useMongoClient: true });

export default (app) => {
  app.mapRestApi = mapRestApi;
  const defaultSchema = { createdOn: { type: Date, default: new Date() } };
  collections.forEach(({ name, schema }) => {
    const Collection = mongoose.model(name, new mongoose.Schema({ ...schema, ...defaultSchema }));
    app.mapRestApi(Collection);
  });
};
