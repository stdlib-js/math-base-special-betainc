<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# betainc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-betainc
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var betainc = require( '@stdlib/math-base-special-betainc' );
```

#### betainc( x, a, b\[, regularized\[, upper]] )

By default, evaluates the regularized lower [incomplete beta function][incomplete-beta-function] for inputs `x`, `a > 0` and `b > 0`. The fourth and fifth parameters of the function can be used to specify whether instead to evaluate the non-regularized and/or upper incomplete beta functions, respectively.

```javascript
var y = betainc( 0.5, 2.0, 2.0 );
// returns 0.5

y = betainc( 0.5, 2.0, 2.0, false );
// returns ~0.083

y = betainc( 0.2, 1.0, 2.0 );
// returns 0.36

y = betainc( 0.2, 1.0, 2.0, true, true );
// returns 0.64
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = betainc( NaN, 1.0, 1.0 );
// returns NaN

y = betainc( 0.8, NaN, 1.0 );
// returns NaN

y = betainc( 0.8, 1.0, NaN );
// returns NaN
```

If provided a `x` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = betainc( 1.5, 1.0, 1.0 );
// returns NaN

y = betainc( -0.5, 1.0, 1.0 );
// returns NaN
```

If provided a negative `a`, the function returns `NaN`.

```javascript
var y = betainc( 0.5, -2.0, 2.0 );
// returns NaN
```

If provided a negative `b`, the function returns `NaN`.

```javascript
var y = betainc( 0.5, 2.0, -2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var betainc = require( '@stdlib/math-base-special-betainc' );

var i;
var x;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    a = randu() * 10.0;
    b = randu() * 10.0;
    console.log( 'x: %d, \t a: %d, \t b: %d, \t f(x,a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), betainc( x, a, b ).toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/beta`][@stdlib/math/base/special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaincinv`][@stdlib/math/base/special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaln`][@stdlib/math/base/special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-betainc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-betainc

[test-image]: https://github.com/stdlib-js/math-base-special-betainc/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-betainc/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-betainc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-betainc?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-betainc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-betainc/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-betainc/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-betainc/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-betainc/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-betainc/main/LICENSE

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta

[@stdlib/math/base/special/betaincinv]: https://github.com/stdlib-js/math-base-special-betaincinv

[@stdlib/math/base/special/betaln]: https://github.com/stdlib-js/math-base-special-betaln

<!-- </related-links> -->

</section>

<!-- /.links -->
