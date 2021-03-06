'use strict';

// MODULES //

var escapeHTML = require( './escape_html.js' );


// MAIN //

/**
* Renders an HTML string.
*
* ## Notes
*
* Example output:
*
* ``` text
* <div class="equation" align="center" data-raw-text="y = \frac{1}{2}x + 5" data-equation="eq:linear_equation">
*     <img src="https://cdn.rawgit.com/owner/repo/commit/docs/img/eqn.svg" alt="Equation for a line having slope 1/2 and intercept 5.">
*     <br>
* </div>
* ```
*
* @private
* @param {Options} opts - render options
* @param {string} opts.className - element class name
* @param {string} opts.align - element alignment
* @param {string} opts.raw - raw equation text
* @param {string} opts.label - equation label
* @param {string} opts.src - image source URL
* @param {string} opts.alt - alternative image text
* @returns {string} HTML string
*/
function render( opts ) {
	var str = '';

	str += '<div';
	str += ' ';
	str += 'class="' + opts.className + '"';
	str += ' ';
	str += 'align="' + opts.align + '"';
	str += ' ';
	str += 'data-raw-text="' + escapeHTML( opts.raw ) + '"';
	str += ' ';
	str += 'data-equation="' + opts.label + '"';
	str += '>';

	str += '\n    ';

	str += '<img';
	str += ' ';
	str += 'src="' + opts.src + '"';
	str += ' ';
	str += 'alt="' + opts.alt + '"';
	str += '>';

	str += '\n    ';

	str += '<br>';

	str += '\n';
	str += '</div>';

	return str;
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
