/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var betainc = require( './../lib' );


// FIXTURES //

var fixtures = require( './fixtures/cpp/output.json' );
var lowerRegularized = fixtures.lower_regularized;
var lowerUnregularized = fixtures.lower_unregularized;
var upperRegularized = fixtures.upper_regularized;
var upperUnregularized = fixtures.upper_unregularized;
var x = fixtures.x;
var a = fixtures.a;
var b = fixtures.b;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof betainc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if `x` is outside `[0,1]`', function test( t ) {
	var val = betainc( -0.2, 1.0, 1.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	val = betainc( 1.1, 1.0, 1.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` negative `a` or `b`', function test( t ) {
	var val = betainc( 0.5, -1.0, 1.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	val = betainc( 0.5, 1.0, -1.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	val = betainc( 0.5, -1.0, -1.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the lower regularized incomplete beta function', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var y;

	expected = lowerRegularized;
	for ( i = 0; i < x.length; i++ ) {
		y = betainc( x[i], a[i], b[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+'. a: '+a[i]+'. b: '+b[i]+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 50.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. a: '+a[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the lower unregularized incomplete beta function', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var y;

	expected = lowerUnregularized;
	for ( i = 0; i < x.length; i++ ) {
		y = betainc( x[i], a[i], b[i], false );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+'. a: '+a[i]+'. b: '+b[i]+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 80.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. a: '+a[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the upper regularized incomplete beta function', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var y;

	expected = upperRegularized;
	for ( i = 0; i < x.length; i++ ) {
		y = betainc( x[i], a[i], b[i], true, true );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+'. a: '+a[i]+'. b: '+b[i]+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 50.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. a: '+a[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the upper unregularized incomplete beta function', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var y;

	expected = upperUnregularized;
	for ( i = 0; i < x.length; i++ ) {
		y = betainc( x[i], a[i], b[i], false, true );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', y: '+y+'. a: '+a[i]+'. b: '+b[i]+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 80.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. a: '+a[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
