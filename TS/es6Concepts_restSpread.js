"use strict";
//Spread
function foo(x, y, z) {
    console.log(x, y, z);
}
foo.apply(void 0, [1, 2, 3]); //
//ES5 equivalent
foo.apply(null, [1, 2, 3]); // 1 2 3
//spreading an array inside another array
var a = [2, 3, 4];
var b = [1].concat(a, [5]);
console.log(b); // [1,2,3,4,5]
//ES5 equivalent
var b = [1].concat(a, [5]);
//Rest
function foo(x, y) {
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
    console.log(x, y, z);
}
foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]
//ES6 - already a real array
function foo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // `args` is already a real array
    // discard first element in `args`
    args.shift();
    // pass along all of `args` as arguments
    // to `console.log(..)`
    console.log.apply(console, args);
}
//ES5 way
function bar() {
    // turn `arguments` into a real array
    var args = Array.prototype.slice.call(arguments);
    // add some elements on the end
    args.push(4, 5);
    // filter out odd numbers
    args = args.filter(function (v) {
        return v % 2 == 0;
    });
    // pass along all of `args` as arguments
    // to `foo(..)`
    foo.apply(null, args);
}
bar(0, 1, 2, 3); // 2 4
