'use strict';

var env = {};

/**
* ENV: node
*	Enable Node.js global variables and scoping. See [node]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}.
*/
env.node = true;

/**
* ENV: browser
*	Enable browser global variables. See [browser]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}.
*/
env.browser = true;

/**
* ENV: worker
*	Enable web worker global variables. See [worker]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}.
*/
env.worker = true;

/**
* ENV: mocha
*	Enable Mocha global variables used for testing. See [mocha]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}.
*/
env.mocha = true;


// EXPORTS //

module.exports = env;
