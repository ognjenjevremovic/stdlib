# SVG Equations

> [remark][remark] plugin to insert Markdown SVG equations.


<section class="usage">

## Usage

``` javascript
var insertEquations = require( '/path/to/@stdlib/tools/remark/plugins/remark-svg-equations' );
```

#### insertEquations()

Attaches a plugin to a [remark][remark] processor in order to insert SVG equations between equation comments.

<!-- eslint-disable no-useless-escape -->

``` javascript
var remark = require( 'remark' );

var str = 'The absolute value is defined as';
str += '\n';
str += '<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->\n';
str += '\n';
str += '<!-- </equation> -->';

remark.use( insertEquations ).process( str, done );

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    // Output the processed Markdown file:
    console.log( out.contents );
}
```

The prior example would generate output similar to the following:

``` text
The absolute value is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="21.207ex" height="6.176ex" style="vertical-align: -2.505ex;" viewBox="0 -1580.7 9130.7 2659.1" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title"><title id="MathJax-SVG-1-Title">StartAbsoluteValue x EndAbsoluteValue equals StartLayout Enlarged left-brace 1st Row 1st Column x 2nd Column if x greater-than-or-equal-to 0 2nd Row 1st Column negative x 2nd Column if x less-than 0 EndLayout</title><defs aria-hidden="true"><path stroke-width="1" id="E1-MJMAIN-7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"></path><path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path><path stroke-width="1" id="E1-MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path stroke-width="1" id="E1-MJMAIN-7B" d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z"></path><path stroke-width="1" id="E1-MJMAIN-69" d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path><path stroke-width="1" id="E1-MJMAIN-66" d="M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z"></path><path stroke-width="1" id="E1-MJMAIN-2265" d="M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path><path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="E1-MJMAIN-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path><path stroke-width="1" id="E1-MJMAIN-3C" d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"></path><path stroke-width="1" id="E1-MJSZ3-7B" d="M618 -943L612 -949H582L568 -943Q472 -903 411 -841T332 -703Q327 -682 327 -653T325 -350Q324 -28 323 -18Q317 24 301 61T264 124T221 171T179 205T147 225T132 234Q130 238 130 250Q130 255 130 258T131 264T132 267T134 269T139 272T144 275Q207 308 256 367Q310 436 323 519Q324 529 325 851Q326 1124 326 1154T332 1205Q369 1358 566 1443L582 1450H612L618 1444V1429Q618 1413 616 1411L608 1406Q599 1402 585 1393T552 1372T515 1343T479 1305T449 1257T429 1200Q425 1180 425 1152T423 851Q422 579 422 549T416 498Q407 459 388 424T346 364T297 318T250 284T214 264T197 254L188 251L205 242Q290 200 345 138T416 3Q421 -18 421 -48T423 -349Q423 -397 423 -472Q424 -677 428 -694Q429 -697 429 -699Q434 -722 443 -743T465 -782T491 -816T519 -845T548 -868T574 -886T595 -899T610 -908L616 -910Q618 -912 618 -928V-943Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true"> <use xlink:href="#E1-MJMAIN-7C" x="0" y="0"></use> <use xlink:href="#E1-MJMATHI-78" x="278" y="0"></use> <use xlink:href="#E1-MJMAIN-7C" x="851" y="0"></use> <use xlink:href="#E1-MJMAIN-3D" x="1407" y="0"></use><g transform="translate(2463,0)"> <use xlink:href="#E1-MJSZ3-7B"></use><g transform="translate(917,0)"><g transform="translate(-11,0)"> <use xlink:href="#E1-MJMATHI-78" x="0" y="550"></use><g transform="translate(0,-650)"> <use xlink:href="#E1-MJMAIN-2212" x="0" y="0"></use> <use xlink:href="#E1-MJMATHI-78" x="778" y="0"></use></g></g><g transform="translate(2340,0)"><g transform="translate(0,550)"> <use xlink:href="#E1-MJMAIN-69"></use> <use xlink:href="#E1-MJMAIN-66" x="278" y="0"></use> <use xlink:href="#E1-MJMATHI-78" x="835" y="0"></use> <use xlink:href="#E1-MJMAIN-2265" x="1685" y="0"></use> <use xlink:href="#E1-MJMAIN-30" x="2741" y="0"></use></g><g transform="translate(0,-650)"> <use xlink:href="#E1-MJMAIN-69"></use> <use xlink:href="#E1-MJMAIN-66" x="278" y="0"></use> <use xlink:href="#E1-MJMATHI-78" x="835" y="0"></use> <use xlink:href="#E1-MJMAIN-3C" x="1685" y="0"></use> <use xlink:href="#E1-MJMAIN-30" x="2741" y="0"></use></g></g></g></g></g></svg>

<!-- </equation> -->
```

</section>

<!-- /.usage -->


<section class="examples">

## Examples

``` javascript
var join = require( 'path' ).join;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var insertEquations = require( '/path/to/@stdlib/tools/remark/plugins/remark-svg-equations' );

var fpath;
var opts;
var file;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.md' );
opts = {
    'encoding': 'utf8'
};
file = readFileSync( fpath, opts );

// Insert equations:
remark().use( insertEquations ).process( file, done );

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    // Output the processed Markdown file:
    console.log( out.contents );
}
```

</section>

<!-- /.examples -->


<section class="links">

[remark]: https://github.com/wooorm/remark

</section>

<!-- /.links -->