//class declaration

//new way
class Foo {
	constructor(a,b) {
		this.x = a;
		this.y = b;
	}
	gimmeXY() {
		return this.x * this.y;
	}
}

//old way
function Foo(a,b) {
	this.x = a;
	this.y = b;
}
Foo.prototype.gimmeXY = function() {
	return this.x * this.y;
}

//instantiation
var f = new Foo( 5, 15 );
f.x; // 5
f.y; // 15
f.gimmeXY(); // 75

//TS shorthand
//ES6 way
class Foo {
	x: number;
	constructor(x:number) {
		this.x = x;
	}
}
//TS way
class Foo {
	constructor(public x:number) {
	}
}