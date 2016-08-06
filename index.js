'use strict';

const denodeify = require('denodeify');
module.exports = function(mod, config = {}) {
  let keys = config.use || Object.keys(mod);
  if(config.ignore) {
    keys = keys.filter(key => {
      return config.ignore.indexOf(key) === -1;
    });
  }
  console.log(keys);
  keys.forEach(key => {
    if (typeof mod[key] === 'function') {
      mod[key] = denodeify(mod[key]);
    }
  });
  return mod;
};
