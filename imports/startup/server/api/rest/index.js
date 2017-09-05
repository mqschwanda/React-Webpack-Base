import mongoose from 'mongoose';

const mongooseId = request => mongoose.Types.ObjectId(request.params._id);

export default function (Collection) {
  const app = this;
  const route = `/api/${Collection.collection.collectionName}`;
  const routeWithId = `${route}/:_id`;

  function handleRestResponse(error, result, response) {
    if (error) response.status(500).jsonp(error);
    else if (!result || result.length === 0) response.status(404).jsonp(result);
    else response.status(200).jsonp(result);
  }

  app.get(route, (request, response) => {
    Collection.find({}, (error, result) => {
      handleRestResponse(error, result, response);
    });
    // Collection.find().exec((error, result) => {
    //   handleRestResponse(error, result, response);
    // });
  });

  app.get(routeWithId, (request, response) => {
    Collection.findOne(mongooseId(request), (error, result) => {
      handleRestResponse(error, result, response);
    });
  });

  app.post(route, (request, response) => {
    new Collection(request.body).save((error, result) => {
      handleRestResponse(error, result, response);
    });
  });

  app.put(routeWithId, (request, response) => {
    const update = { $set: request.body };
    const options = { new: true };
    Collection.findOneAndUpdate(mongooseId(request), update, options, (error, result) => {
      handleRestResponse(error, result, response);
    });
  });

  app.delete(routeWithId, (request, response) => {
    Collection.findOneAndRemove(mongooseId(request), (error, result) => {
      handleRestResponse(error, result, response);
    });
  });
}
