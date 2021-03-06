'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-lint-equations' );
var rule = require( 'unified-lint-rule' );
var visit = require( 'unist-util-visit' );
var tex2svg = require( './../../../../utils/tex-equation-to-svg' );


// VARIABLES //

var EQN_START = /<!-- <equation.*> -->/gi;
var EQN_END = /<!-- <\/equation> -->/gi;
var LABEL = /label="([^"]*)"/;
var ALT = /alt="([^"]*)"/;
var RAW = /raw="([^"]*)"/;


// MAIN //

/**
* Lints Markdown equations.
*
* @private
* @param {Node} tree - abstract syntax tree (AST)
* @param {File} file - virtual file
* @param {Object} options - options
* @param {Callback} clbk - callback to invoke upon completion
* @returns {void}
*/
function linter( tree, file, options, clbk ) {
	var equations;
	var total;
	var idx;

	equations = [];
	idx = -1;

	debug( 'Linting file: %s', file.path || '' );
	visit( tree, 'html', visitor );

	total = equations.length;
	debug( 'Found %d equations.', total );
	if ( total === 0 ) {
		return done();
	}
	next();

	/**
	* Callback invoked upon finding a matching node.
	*
	* @private
	* @param {Object} node - AST node
	* @param {number} index - position of `node` in `parent`
	* @param {Object} parent - parent AST node
	* @returns {void}
	*/
	function visitor( node, index, parent ) {
		if ( EQN_START.test( node.value ) === true ) {
			debug( 'Found an equation...' );
			equations.push({
				'node': node,
				'parent': parent,
				'index': index
			});
		}
	} // end FUNCTION visitor()

	/**
	* Lints the next node.
	*
	* @private
	* @returns {void}
	*/
	function next() {
		var parent;
		var node;
		var tmp;
		var msg;
		var pos;
		var i;

		idx += 1;
		debug( 'Linting equation...' );

		parent = equations[ idx ].parent;
		node = equations[ idx ].node;
		i = equations[ idx ].index;

		pos = node.position;
		pos = pos.start.line + ':' + pos.start.column;
		if (
			EQN_END.test( parent.children[ i+1 ].value ) ||
			EQN_END.test( parent.children[ i+2 ].value )
		) {
			debug( 'Equation starting comment has a matching ending comment.' );
		} else {
			msg = pos+'   error   Equation elements must have matching starting and ending comments   missing-end-comment';
			debug( msg );
			file.message( msg, node );
		}

		tmp = LABEL.exec( node.value );
		if ( tmp && tmp[ 1 ] ) {
			debug( 'Equation has a label: %s', tmp[ 1 ] );
		} else {
			msg = pos+'   error   Equation elements must have a label   missing-equation-label';
			debug( msg );
			file.message( msg, node );
		}

		tmp = ALT.exec( node.value );
		if ( tmp && tmp[ 1 ] ) {
			debug( 'Equation has alternate text: %s', tmp[ 1 ] );
		} else {
			msg = pos+'   error   Equation elements must have alternate text   missing-alternate-text';
			debug( msg );
			file.message( msg, node );
		}

		tmp = RAW.exec( node.value );
		if ( !tmp || !tmp[ 1 ] ) {
			msg = pos+'   error   Equation elements must have a TeX string   missing-tex-string';
			debug( msg );
			file.message( msg, node );
			return done();
		}
		debug( 'Equation has a TeX string: %s', tmp[ 1 ] );
		return tex2svg( tmp[ 1 ], onSVG );

		/**
		* Callback invoked upon attempting to render a TeX equation.
		*
		* @private
		* @param {(Error|null)} error - error object
		*/
		function onSVG( error ) {
			var msg;
			if ( error ) {
				msg = pos+'   error   '+error.message+'   invalid-equation';
				debug( msg );
				file.message( msg, node );
			} else {
				debug( 'Equation successfully renders.' );
			}
			done();
		} // end FUNCTION onSVG()
	} // end FUNCTION next()

	/**
	* Callback invoked after processing an AST node.
	*
	* @private
	* @returns {void}
	*/
	function done() {
		if ( idx === total-1 ) {
			debug( 'Finished linting: %s', file.path || '' );
			return clbk();
		}
		debug( 'Finished linting equation.' );
		next();
	} // end FUNCTION done()
} // end FUNCTION linter()


// EXPORTS //

module.exports = rule( 'remark-lint:equations', linter );
