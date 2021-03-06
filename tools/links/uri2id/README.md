# uri2id

> Return the id corresponding to a provided URI.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var uri2id = require( '@stdlib/tools/links/uri2id' );
```

<a name="async"></a>

#### uri2id( uri, \[options,\] clbk )

Returns the `id` corresponding to a provided `URI`.

``` javascript
uri2id( 'http://www.bibtex.org/', clbk );

function clbk( error, id ) {
    if ( error ) {
        throw error;
    }
    console.log( id );
    // => 'bibtex'
}
```

The function accepts the following `options`:

* __database__: path to a link database.

To use an alternative link database, set the `database` option.

``` javascript
var opts = {
    'database': './path/to/link/database/json'
};

uri2id( 'http://www.bibtex.org/', opts, clbk );

function clbk( error, id ) {
    if ( error ) {
        throw error;
    }
    console.log( id );
}
```


#### uri2id.sync( uri\[, options\] )

Synchronously returns the `id` which corresponds to a provided `URI`.

``` javascript
var id = uri2id.sync( 'http://www.bibtex.org/' );
if ( id instanceof Error ) {
    throw id;
}
console.log( id );
// => 'bibtex'
```

The method accepts the same `options` as [`uri2id()`](#async) above.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

* If a function is unable to resolve an `id`, the function returns `null`.
* A link database is resolved relative to the current working directory of the calling process and should be a [JSON][json] file.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

``` javascript
var uri2id = require( '@stdlib/tools/links/uri2id' );

uri2id( 'https://github.com/stdlib-js/stdlib', clbk );

function clbk( error, id ) {
    if ( error ) {
        throw error;
    }
    console.log( id );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

---

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

``` bash
Usage: uri2id [options] [<uri>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --database filepath   Database filepath.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

* If invoked without a URI, the CLI will interactively prompt for argument input.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ uri2id http://www.bibtex.org/
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

</section>

<!-- /.links -->
