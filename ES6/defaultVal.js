//ES5
function foo(x,y) {
	x = x || 11;
	y = y || 31;
	console.log( x + y );
}
foo(); // 42
foo( 5, 6 ); // 11
foo( 5 ); // 36
foo( null, 6 ); // 17
foo( 0, 42 ); // 53 <-- Oops, not 42

//Avoiding issues with '0'
function foo(x,y) {
	x = (x !== undefined) ? x : 11;
	y = (y !== undefined) ? y : 31;
	console.log( x + y );
}
foo( 0, 42 ); // 42
foo( undefined, 6 ); // 17

//If you want to be able to pass undefined

function foo(x,y) {
	x = (0 in arguments) ? x : 11;
	y = (1 in arguments) ? y : 31;
	console.log( x + y );
}
foo( 5 ); // 36
foo( 5, undefined ); // NaN

//ES6
function foo(x = 11, y = 31) {
	console.log( x + y );
}
foo(); // 42
foo( 5, 6 ); // 11
foo( 0, 42 ); // 42
foo( 5 ); // 36
foo( 5, undefined ); // 36 <-- `undefined` is missing
foo( 5, null ); // 5 <-- null coerces to `0`
foo( undefined, 6 ); // 17 <-- `undefined` is missing
foo( null, 6 ); // 6 <-- null coerces to `0`

//invalid
//foo(...vals=[1,2,3]) {}

//default value expressions

function bar(val) {
	console.log( "bar called!" );
	return y + val;
}
function foo(x = y + 3, z = bar( x )) {
	console.log( x, z );
}

var y = 5;
foo(); // "bar called"
// 8 13
foo( 10 ); // "bar called"
// 10 15
y = 6;
foo( undefined, 10 ); // 9 10