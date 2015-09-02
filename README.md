Default Environments
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) default environments.


## Installation

``` bash
$ npm install eslint-env-default
```


## Usage

``` javascript
var env = require( 'eslint-env-default' );
```

#### env

[ESLint](http://eslint.org/) default environments.

``` javascript
console.dir( env );
/*
	{
		'node': true,
		'browser': true,
		'worker': true,
		'mocha': true
	}
*/
```


## Examples

``` javascript
var env = require( 'eslint-env-default' ),
	config = require( './existing_config.json' );

// Add the environments to an existing ESLint config...
config.ecmaenv = env;

console.dir( config );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-env-default.svg
[npm-url]: https://npmjs.org/package/eslint-env-default

[travis-image]: http://img.shields.io/travis/kgryte/eslint-env-default/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-env-default

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-env-default/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-env-default?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-env-default.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-env-default

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-env-default.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-env-default

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-env-default.svg
[github-issues-url]: https://github.com/kgryte/eslint-env-default/issues
