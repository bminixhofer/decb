'use strict';

const denodeify = require('denodeify');
module.exports = function(module, config = {}) {
    module = Object.create(module);
    for (var key in module)
      if (typeof module[key] === 'function') {
        if (config.ignore) {
          if (config.ignore.indexOf(key) > 0) return;
        }
        if (config.use) {
          if (config.use.indexOf(key) === -1) return;
        }
        module[key] = denodeify(module[key]);
      }
    return module;
  }
};
