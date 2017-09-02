/* eslint-disable no-param-reassign */

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import JSONStream from 'JSONStream';

const MONGODB_URI = 'mongodb://localhost/ReactWebpackBase';
mongoose.Promise = bluebird;

const database = process.env.MONGODB_URI || MONGODB_URI;
mongoose.connect(database, { useMongoClient: true });

function registerCollection({ ...options }) {
  const app = this;
  const { name } = options;
  const schema = new mongoose.Schema({
    ...options.schema,
    ...{ createdOn: { type: Date, default: new Date() } },
  });
  const Collection = mongoose.model(name, schema);
  const route = `/api/${name}`;
  app.get(route, (req, res) => {
    Collection.find()
              .cursor()
              .pipe(JSONStream.stringify())
              .pipe(res.type('json'));
  });
  app.post(route, (req, res) => {
    const collection = new Collection();
    collection.name = req.body.name;

    collection.save((err) => {
      if (err) res.send(err);
      res.json({ message: `${name} record created` });
    });
  });
}

const collections = [{
  name: 'collection',
}];


export default (app) => {
  app.registerCollection = registerCollection;

  collections.forEach((collection) => {
    app.registerCollection(collection);
  });
};
