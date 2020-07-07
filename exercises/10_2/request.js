const fetch = require("fetch").fetchUrl;

const requestApi = () => {
  return new Promise((resolved, rejected) => {
    fetch('https://dog.ceo/api/breeds/image/random', (err,meta,data) => {
      if(err) rejected(err);
      resolved(JSON.parse(data.toString()));
    });
  });
}

module.exports = {requestApi};