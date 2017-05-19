var foo = [1,2,3];
var obj = {
foo // means `foo: foo`
};
obj.foo; // [1,2,3]

//transpiled to:

var foo = [1,2,3];
var obj = {
foo: foo
};
obj.foo; // [1,2,3]