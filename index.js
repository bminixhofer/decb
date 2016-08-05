let fs = require('./lib/promifs');

fs.readFile('README.md', 'utf8').then(file => {
  console.log(file);
});
