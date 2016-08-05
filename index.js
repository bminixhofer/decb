'use strict';

const denodeify = require('denodeify');
module.exports = class Decb {
  constructor(config) {
    this.ignore = config.ignore;
    this.use = !this.ignore && config.use;
  }
  use(module) {
    module = Object.create(module);
    for (var key in module)
      if (typeof module[key] === 'function') {
        if (this.ignore) {
          if (this.ignore.indexOf(key) > 0) return;
        }
        if (this.use) {
          if (this.use.indexOf(key) === -1) return;
        }
        module[key] = denodeify(module[key]);
      }
    return module;
  }
};
