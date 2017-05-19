{
foo(); // works!
function foo() {
// ..
}
}
foo(); // ReferenceError

//Hoisting and block scope

if (something) {
	function foo() {
		console.log( "1" );
	}
}
else {
	function foo() {
		console.log( "2" );
	}
}
foo(); // ??