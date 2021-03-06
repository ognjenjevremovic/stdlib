# Citation Reference

> Return a reference corresponding to a citation identifier.


<section class="intro">

</section>

<!-- /.intro -->


<section class="usage">

## Usage

``` javascript
var toReference = require( '@stdlib/tools/bib/citation-reference' );
```

<a name="to-reference"></a>

#### toReference( id, \[options,\] clbk )

Returns a reference corresponding to a citation identifier.

``` javascript
toReference( '@press1992', clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

The function accepts the following `options`:

* __database__: path to a bibliographic database.
* __csl__: path to a [Citation Style Language][csl] (CSL) file.

To use a specific bibliographic database, set the `database` option.

``` javascript
var opts = {
    'database': '/foo/bar/baz/bib.bib'
};

toReference( '@press1992', opts, clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

To use a particular [Citation Style Language][csl] (CSL), set the `csl` option.

``` javascript
var opts = {
    'csl': '/foo/bar/baz/style.csl'
};

toReference( '@press1992', opts, clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
}
```

#### toReference.sync( id\[, options\] )

Synchronously return a reference corresponding to a citation identifier.

``` javascript
var ref = toReference.sync( '@press:1992' );
// returns '...'
```

The method accepts the same `options` as [`toReference()`](#to-reference) above.

</section>

<!-- /.usage -->


<section class="notes">

## Notes

* System dependencies:

  - [pandoc][pandoc]
  - [pandoc-citeproc][pandoc-citeproc]

</section>

<!-- /.notes -->


<section class="examples">

## Examples

``` javascript
var toReference = require( '@stdlib/tools/bib/citation-reference' );

/* bib.bib
@book{press:1992,
    author = {William H. Press and Brian P. Flannery and Saul A. Teukolsky and William T. Vetterling},
    isbn = {0521431085},
    keywords = {computing, software, programming},
    publisher = {Cambridge University Press},
    title = {{Numerical Recipes in C: The Art of Scientific Computing, Second Edition}},
    year = {1992},
}
*/

var opts = {
    'database': 'bib.bib',
    'csl': 'chicago-author-date.csl'
};

toReference( '@press1992', opts, clbk );

function clbk( error, reference ) {
    if ( error ) {
        throw error;
    }
    console.log( reference );
    /*
        (Press et al. 1992)

        Press, William H., Brian P. Flannery, Saul A. Teukolsky, and William T. Vetterling. 1992. *Numerical Recipes in C: The Art of Scientific Computing, Second Edition*. Cambridge University Press.
    */
}
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: citation-reference [options] <citation_identifier>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --database filepath   Database filepath.
         --csl filepath        Citation Style Language filepath.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

``` bash
$ citation-reference '@press:1992'
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

[csl]: http://citationstyles.org/

[pandoc]: http://pandoc.org/
[pandoc-citeproc]: https://github.com/jgm/pandoc-citeproc

</section>

<!-- /.links -->
