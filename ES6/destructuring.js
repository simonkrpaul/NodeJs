//Array, ES5
function foo() {
return [1,2,3];
}
var tmp = foo(),
a = tmp[0], b = tmp[1], c = tmp[2];
console.log( a, b, c ); // 1 2 3

//Object ES5
function bar() {
	return {
	x: 4,
	y: 5,
	z: 6
	};
}
var tmp = bar(),
x = tmp.x, y = tmp.y, z = tmp.z;
console.log( x, y, z ); // 4 5 6

//ES6 destructuring

var [ a, b, c ] = foo();
var { x: x, y: y, z: z } = bar();
console.log( a, b, c ); // 1 2 3
console.log( x, y, z ); // 4 5 6

//Shorthand notation. If the variable name is same

var { x, y, z } = bar();
console.log( x, y, z ); // 4 5 6

//target <-- source vs source <-- target
var { x: bam, y: baz, z: bap } = bar();
console.log( bam, baz, bap ); // 4 5 6
console.log( x, y, z ); // ReferenceError

//Assigning an object literal

var aa = 10, bb = 20;
var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;
console.log( AA, BB ); // 10 20

//Destructuring as assignment, not declaration
var a, b, c, x, y, z;
[a,b,c] = foo();
( { x, y, z } = bar() );
console.log( a, b, c ); // 1 2 3
console.log( x, y, z ); // 4 5 6

//Using computed expression in destructuring
var which = "x",
o = {};
( { [which]: o[which] } = bar() );
console.log( o.x ); // 4

//Mapping an object into an array
var o1 = { a: 1, b: 2, c: 3 },
a2 = [];
( { a: a2[0], b: a2[1], c: a2[2] } = o1 );
console.log( a2 );

//Mapping an array into an object
var a1 = [ 1, 2, 3 ],
o2 = {};
[ o2.a, o2.b, o2.c ] = a1;
console.log( o2.a, o2.b, o2.c ); // 1 2 3

//Swap two variables
var x = 10, y = 20;
[ y, x ] = [ x, y ];
console.log( x, y );

//correct way to declare for better readability

// harder to read:
var { a: { b: [ c, d ], e: { f } }, g } = obj;

// better:
var {
a: {
b: [ c, d ],
e: { f }
},
g
} = obj;

//It follows right to left assignment

//object
var o = { a:1, b:2, c:3 },
a, b, c, p;
p = { a, b, c } = o;
console.log( a, b, c ); // 1 2 3
p === o; // true

//Array
var o = [1,2,3],
a, b, c, p;
p = [ a, b, c ] = o;
console.log( a, b, c ); // 1 2 3
p === o; // true

//Chaining destructuring assignment expressions

var o = { a:1, b:2, c:3 },
p = [4,5,6],
a, b, c, x, y, z;
( {a} = {b,c} = o );
[x,y] = [z] = p;
console.log( a, b, c ); // 1 2 3
console.log( x, y, z ); // 4 5 4

//destructuring with rest
var a = [2,3,4];
var [ b, ...c ] = a;
console.log( b, c ); // 2 [3,4]

//default value and destructuring
var [ a = 3, b = 6, c = 9, d = 12 ] = foo();
var { x = 5, y = 10, z = 15, w = 20 } = bar();
console.log( a, b, c, d ); // 1 2 3 12
console.log( x, y, z, w ); // 4 5 6 20


//nested destructuring
var a1 = [ 1, [2, 3, 4], 5 ];
var o1 = { x: { y: { z: 6 } } };
var [ a, [ b, c, d ], e ] = a1;
var { x: { y: { z: w } } } = o1;
console.log( a, b, c, d, e ); // 1 2 3 4 5
console.log( w ); // 6


//flattening out objects with nested destructuring
var App = {
model: {
User: function(){ .. }
}
};
// instead of:
// var User = App.model.User;
var { model: { User } } = App;

//Destructuring parameters

//Array
function foo( [ x, y ] ) {
console.log( x, y );
}
foo( [ 1, 2 ] ); // 1 2
foo( [ 1 ] ); // 1 undefined
foo( [] ); // undefined undefined

//Object
function foo( { x, y } ) {
console.log( x, y );
}
foo( { y: 1, x: 2 } ); // 2 1
foo( { y: 42 } ); // undefined 42
foo( {} ); // undefined undefined