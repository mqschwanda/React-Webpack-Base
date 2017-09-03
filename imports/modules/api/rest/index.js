import http from 'http';

export default {
  put() {},
  post() {},
  get(collectionName) {
    let rawData = '';
    http.get(`/api/${collectionName}`, (res) => {
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const data = JSON.parse(rawData);
          console.log(data);
        } catch (e) { console.error(e.message); }
      });
    }).on('error', (e) => { console.error(`Got error: ${e.message}`); });
  },
  delete() {},
};
