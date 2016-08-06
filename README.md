# decb

`decb` is a module that translates modules to a promisified version of them. Note that it is not possible to differentiate between asynchronous and synchronous functions, so (if needed) it has do be done manually.

## Code Example

Use `fs.readFile` with Promises:
```js
    const decb = require('decb');
    const fs = decb(require('fs'));

    fs.readFile('example.js', 'utf8').then(file => {
        console.log(file);
    });

    console.log(fs.readFileSync('example.js', 'utf8'));
    //Returns a promise and does not work
```

Use `fs.readFile` with Promises, but don't translate `fs.readFileSync`
```js
    const decb = require('decb');
    const fs = decb(require('fs'), {
      ignore: ['readFileSync']
    });

    fs.readFile('example.js', 'utf8').then(file => {
        console.log(file);
    });

    console.log(fs.readFileSync('example.js', 'utf8'));
    //Works as expected
```

Use `fs.readFile` with Promises, but don't change the rest of the module
```js
    const decb = require('decb');
    const fs = decb(require('fs'), {
      use: ['readFile']
    });

    fs.readFile('example.js', 'utf8').then(file => {
        console.log(file);
    });

    console.log(fs.readFileSync('example.js', 'utf8'));
    console.log(fs.readdirSync('lib'));
    //Works as expected
```
## Installation

  `$ npm install decb`

## API

###decb(module[,config])
  - module: an npm module to translate
  - config: <JSON> a config object with either an `ignore` or `use` property

Returns a promisified version of the module

## License

  MIT
