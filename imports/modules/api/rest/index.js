import http from 'http';

function handleError(error) {
  console.log(error);
}

function handleRestResponse(response) {
  let rawData = '';
  response.on('data', (chunk) => { rawData += chunk; });
  response.on('end', () => {
    try {
      const data = JSON.parse(rawData);
      console.log(data);
    } catch (error) { console.log(error); }
  });
}

export default {
  put(collectionName, _id, data) {
    const options = { path: `/api/${collectionName}/${_id}`, method: 'PUT' };
    const request = http.request(options, (response) => {
      response.setEncoding('utf8');
      request.on('error', handleError);
      request.write(data); // write data to request body
      request.end();
    });
  },
  post(collectionName, data) {
    const options = { path: `/api/${collectionName}/`, method: 'POST' };
    const request = http.request(options, (response) => {
      response.setEncoding('utf8');
      request.on('error', handleError);
      request.write(data); // write data to request body
      request.end();
    });
  },
  get(collectionName, _id) {
    http.get(`/api/${collectionName}${_id ? `/${_id}` : ''}`, handleRestResponse)
        .on('error', handleError);
  },
  delete(collectionName, _id) {
    const options = { path: `/api/${collectionName}/${_id}`, method: 'DELETE' };
    http.request(options, handleRestResponse);
  },
};
