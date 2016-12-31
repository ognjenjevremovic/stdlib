'use strict';

/**
* ESLint rules for variable declarations.
*
* @namespace rules
*/
var rules = {};

/**
* Allow variables to be initialized either during declaration or otherwise.
*
* @name init-declarations
* @memberof rules
* @type {string}
* @default 'off'
* @see [init-declarations]{@link http://eslint.org/docs/rules/init-declarations}
*
* @example
* // Okay...
* var x;
* var y;
*
* x = 5;
* y = 10;
*
* @example
* // Okay...
* var y = 10;
* var x = 5;
*/
rules[ 'init-declarations' ] = 'off';

/**
* Address IE8 bug in which the `catch` clause can overwrite a variable in the outer scope.
*
* @name no-catch-shadow
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-catch-shadow]{@link http://eslint.org/docs/rules/no-catch-shadow}
*
* @example
* // Bad...
* var err = 'x';
* try {
*     throw new Error( 'beep' );
* } catch( err ) {
*     // Do something...
* }
*
* @example
* // Good...
* var err = 'x';
* try {
*     throw new Error( 'beep' );
* } catch( error ) {
*     // Do something...
* }
*/
rules[ 'no-catch-shadow' ] = 'error';

/**
* Never allow variables to be deleted; only properties.
*
* @name no-delete-var
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-delete-var]{@link http://eslint.org/docs/rules/no-delete-var}
*
* @example
* // Bad...
* var x = 5;
* delete x;
*/
rules[ 'no-delete-var' ] = 'error';

/**
* Never allow a label to share a name with a variable.
*
* @name no-label-var
* @memberof no-label-var
* @type {string}
* @default 'error'
* @see [no-label-var]{@link http://eslint.org/docs/rules/no-label-var}
*
* @example
* // Bad...
* var x = 'beep';
* x: while( true ) {
*     break x;
* }
*
* @example
* // Okay...
* var x = 'beep';
* y : while( true ) {
*     break y;
* }
*/
rules[ 'no-label-var' ] = 'error';

/**
* Never allow usage of specific global variable names.
*
* @name no-restricted-globals
* @memberof rules
* @type {Array}
* @see [no-restricted-globals]{@link http://eslint.org/docs/rules/no-restricted-globals}
*/
rules[ 'no-restricted-globals' ] = [ 'error', 'event', 'fdescribe' ];

/**
* Never allow reassignment of restricted names.
*
* @name no-shadow-restricted-names
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-shadow-restricted-names]{@link http://eslint.org/docs/rules/no-shadow-restricted-names}
*
* @example
* // Bad...
* function NaN() {
*     // Do something...
* }
*/
rules[ 'no-shadow-restricted-names' ] = 'error';

/**
* Allow shadowing of variable names in a local scope.
*
* @name no-shadow
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-shadow]{@link http://eslint.org/docs/rules/no-shadow}
*
* @example
* // Okay...
* var x = 'beep';
* function foo() {
*     var x = 'boop';
* }
*/
rules[ 'no-shadow' ] = 'off';

/**
* Never allow a variable to be initialized as `undefined`.
*
* @name no-undef-init
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-undef-init]{@link http://eslint.org/docs/rules/no-undef-init}
*
* @example
* // Bad...
* var x = undefined;
*
* @example
* // Good...
* var x;
*/
rules[ 'no-undef-init' ] = 'error';

/**
* Never allow undeclared variables.
*
* @name no-undef
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-undef]{@link http://eslint.org/docs/rules/no-undef}
*
* @example
* // Bad...
* x = 5;
*
* @example
* // Good...
* var x = 5;
*/
rules[ 'no-undef' ] = 'error';

/**
* Never allow the use of `undefined`.
*
* @name no-undefined
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-undefined]{@link http://eslint.org/docs/rules/no-undefined}
*
* @example
* // Bad...
* var x = undefined;
*
* @example
* // Bad...
* var undefined = 'beep';
*
* @example
* // Good...
* var x;
*
* @example
* // Good...
* var undef = 'beep';
*/
rules[ 'no-undefined' ] = 'error';

/**
* Never allow unused variables, except for function arguments preceding a used argument.
*
* @name no-unused-vars
* @memberof rules
* @type {Array}
* @see [no-unused-vars]{@link http://eslint.org/docs/rules/no-unused-vars}
*
* @example
* // Bad...
* var unused = 5;
*
* @example
* // Bad...
* function foo( a, b, c ) {
*     return 5;
* }
*
* @example
* // Good...
* function foo( a, b, c ) {
*     return c;
* }
*/
rules[ 'no-unused-vars' ] = [ 'error', {
	'vars': 'all',
	'args': 'after-used',
	'caughtErrors': 'all'
}];

/**
* Never allow a variable to be used before being declared (except for function declarations).
*
* @name no-use-before-define
* @memberof rules
* @type {Array}
* @see [no-use-before-define]{@link http://eslint.org/docs/rules/no-use-before-define}
*
* @example
* // Bad...
* x = 5;
* var x;
*
* @example
* // Good...
* var x;
* x = 5;
*
* @example
* // Okay...
* function bar() {
*     return foo();
*     function foo(){}
* }
*/
rules[ 'no-use-before-define' ] = [ 'error', {
	'functions': false,
	'classes': true
}];


// EXPORTS //

module.exports = rules;
