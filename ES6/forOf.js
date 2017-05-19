//for-of loop
var a = ["a","b","c","d","e"];
for (var idx in a) {
	console.log( idx );
}
// 0 1 2 3 4
for (var val of a) {
	console.log( val );
}
// "a" "b" "c" "d" "e"

//old way
var a = ["a","b","c","d","e"],
k = Object.keys( a );
for (var val, i = 0; i < k.length; i++) {
	val = a[ k[i] ];
	console.log( val );
}// "a" "b" "c" "d" "e"

//looping over primitive string
for (var c of "hello") {
	console.log( c );
}// "h" "e" "l" "l" "o"

//for-of and destructuring
var o = {};
for (o.a of [1,2,3]) {
	console.log( o.a );
}// 1 2 3
for ({x: o.a} of [ {x: 1}, {x: 2}, {x: 3} ]) {
	console.log( o.a );
}// 1 2 3