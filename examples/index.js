'use strict';

var env = require( './../lib' ),
	config = require( './existing_config.json' );

// Add the environments to an existing ESLint config...
config.env = env;

console.dir( config );
