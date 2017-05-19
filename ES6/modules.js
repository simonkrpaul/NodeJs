//Modules

//Old way
function Hello(name) {
	greeting() {
		console.log( "Hello " + name + "!" );
	}
	// public API
	return {
		greeting: greeting
	};
}
var me = Hello( "Kyle" );
console.log(me.greeting); // Hello Kyle!

//If it needs to be called as a singleton
var me = (function Hello(name){
function greeting() {
console.log( "Hello " + name + "!" );
}
// public API
return {
greeting: greeting
};
})( "Kyle" );
me.greeting(); // Hello Kyle!


//New way - named export
export function foo() {
// ..
}
export var awesome = 42;
var bar = [1,2,3];
export { bar };

//Another way of expressing
function foo() {
// ..
}
var awesome = 42;
var bar = [1,2,3];
export { foo, awesome, bar };

//alias syntax
function foo() { .. }
export { foo as bar };

//single default export
function foo(..) {
// ..
}
export default foo;

//Can also be represented as
export default function foo(..) {
// ..
}

//Other default format
function foo(..) {
// ..
}
export { foo as default };

//instead of exporting multiple methods in one object
export default function foo() { .. }
foo.bar = function() { .. };
foo.baz = function() { .. };

//export multiple objects
export default function foo() { .. }
export function bar() { .. }
export function baz() { .. }

//Mixing default and named exports
function foo() { .. }
function bar() { .. }
function baz() { .. }
export { foo as default, bar, baz, .. };

//importing from a named export
import { foo, bar, baz } from "foo";

//imported as
import { foo as theFooFunc } from "foo";

//importing default export
import foo from "foo";
// or:
import { default as foo } from "foo";

//importing mixed exports
import FOOFN, { bar, baz as BAZ } from "foo";
FOOFN();
bar();
BAZ();

//importing entire API
export function bar() { .. }
export var x = 42;
export function baz() { .. }

import * as foo from "foo";
foo.bar();
foo.x; // 42
foo.baz();