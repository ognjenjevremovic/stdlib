'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-write-svg-equations:attacher' );
var copy = require( '@stdlib/utils/copy' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Attaches a plugin to a remark processor in order to create SVGs for HTML equation elements.
*
* @param {Options} [options] - options object
* @param {string} [options.dir="./docs/img/"] - resource directory
* @param {string} [options.prefix="equation_"] - file name prefix
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} transformer
*/
function attacher( options ) {
	var opts = copy( defaults );

	// NOTE: cannot use `arguments.length` check, as `options` may be explicitly passed as `undefined`
	if ( options !== void 0 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'dir' ) ) {
			if ( !isString( options.dir ) ) {
				throw new TypeError( 'invalid option. `dir` option must be a string primitive. Value: `' + options.dir + '`.' );
			}
			opts.dir = options.dir;
		}
		if ( hasOwnProp( options, 'prefix' ) ) {
			if ( !isString( options.prefix ) ) {
				throw new TypeError( 'invalid option. `prefix` option must be a string primitive. Value: `' + options.prefix + '`.' );
			}
			opts.prefix = options.prefix;
		}
	}
	debug( 'Attaching a plugin configured with the following options: %s', JSON.stringify( opts ) );
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
