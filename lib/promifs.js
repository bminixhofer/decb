'use strict';

let fs = Object.create(require('fs'));
const denodeify = require('denodeify');
module.exports = fs;
for (var key in fs)
  if (typeof fs[key] === 'function')
    fs[key] = denodeify(fs[key]);
