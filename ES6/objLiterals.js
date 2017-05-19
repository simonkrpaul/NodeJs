//concise properties

//old way
var x = 2, y = 3,
o = {
	x: x,
	y: y
};

//new way
var x = 2, y = 3,
o = {
	x,
	y
};


//concise methods

//old way
var o = {
		x: function(){
		// ..
		},
		y: function(){
		// ..
		}
}

//new way
var o = {
	x() {
	// ..
	},
	y() {
	// ..
	}
}

//discussion on concise methods and recursion

function runSomething(o) {
	var x = Math.random(),
	y = Math.random();
	return o.something( x, y );
}
runSomething( {
	something: function something(x,y) {
		if (x > y) {
			// recursively call with `x`
			// and `y` swapped
			return something( y, x );
		}
		return y - x;
	}
} );

//getter and setter

var o = {
	__id: 10,
	get id() { return this.__id++; },
	set id(v) { this.__id = v; }
}
o.id; // 10
o.id; // 11
o.id = 20;
o.id; // 20
// and:
o.__id; // 21
o.__id; // 21--still!

//Computed property name

//old way
var prefix = "user_";
var o = {
	baz: function(..){ .. }
};
o[ prefix + "foo" ] = function(..){ .. };
o[ prefix + "bar" ] = function(..){ .. };

//New way
var prefix = "user_";
var o = {
	baz: function(..){ .. },
	[ prefix + "foo" ]: function(..){ .. },
	[ prefix + "bar" ]: function(..){ .. }
};

//Setting prototype

//Not-so-right way

var o2 = {
__proto__: o1,
// ..
};

//better way (es6 only way)
var o1 = {
// ..
};
var o2 = {
// ..
};
Object.setPrototypeOf( o2, o1 );

//Super in object literals

var o1 = {
	foo() {
		console.log( "o1:foo" );
	}
};
var o2 = {
	foo() {
		super.foo();
		console.log( "o2:foo" );
	}
};
Object.setPrototypeOf( o2, o1 );
o2.foo(); // o1:foo
		  // o2:foo

//Template literals

//old way
var name = "Kyle";
var greeting = "Hello " + name + "!";
console.log( greeting ); // "Hello Kyle!"
console.log( typeof greeting ); // "string"

//new way
var name = "Kyle";
var greeting = `Hello ${name}!`;
console.log( greeting ); // "Hello Kyle!"
console.log( typeof greeting ); // "string"

//Interpolation expressions
function upper(s) {
	return s.toUpperCase();
}
var who = "reader";
var text =
`A very ${upper( "warm" )} welcome
to all of you ${upper( `${who}s` )}!`;
console.log( text );
// A very WARM welcome
// to all of you READERS!

//Tagged template literals
function foo(strings, ...values) {
console.log( strings );
console.log( values );
}
var desc = "awesome";
foo`Everything is ${desc}! ${desc}`;
// [ "Everything is ", "!"]
// [ "awesome" ]

//Raw and tagged template lliterals
function showraw(strings, ...values) {
	console.log( strings );
	console.log( strings.raw );
}
showraw`Hello\nWorld`;
// [ "Hello
// World" ]
// [ "Hello\nWorld" ]