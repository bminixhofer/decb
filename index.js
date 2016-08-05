'use strict';

const denodeify = require('denodeify');
module.exports = function(module) {
  module = Object.create(module);
  for (var key in module)
    if (typeof module[key] === 'function')
      module[key] = denodeify(module[key]);
  return module;
};
