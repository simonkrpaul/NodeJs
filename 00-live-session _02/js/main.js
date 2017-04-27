var a = 10;
function testFn(){
	this.a = 30;
	//console.log(this.a)//undefined
}
testFn.myFunc = function(){
	//do something
}
var x = new testFn;
x.a = 20;
var y = new testFn;
console.log(x.a);
x.myFunc();
//testFn();
//current reference
