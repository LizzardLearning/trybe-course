const fetch = require("fetch").fetchUrl;


const requestJoke = () => {
  const options = { 
    headers: { Accept: 'application/json' }
  };

  return new Promise((resolved, rejected) => {
    fetch('https://icanhazdadjoke.com/', options, (err,meta,data) => {
      if(err) rejected(err);
      resolved(JSON.parse(data.toString()));
    });
  });
}

module.exports = {requestJoke};