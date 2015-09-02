/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	env = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'eslint-env-default', function tests() {

	it( 'should export an object', function test() {
		expect( env ).to.be.an( 'object' );
	});

});
