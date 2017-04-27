// function players(){
// 	this.energy = 50;
// 	this.stamina = 50;
// 	alert("Hi!")
// }
// players.prototype.kick = function(){
// 	alert("Kick!");
// }
// players.prototype.punch = function(){
// 	alert("Punch!");
// }
// var cobra = new players;
// var snakeEyes = new players;

// cobra.energy = 90;
// console.log(cobra.energy);
// console.log(snakeEyes.energy);
// cobra.eyeColor ='blue';
// cobra.specialMove = function(){
// 	//<do something>
// }
// //encapsulation

// //closures
// function parentFn(){
// 	var a = 10;
// 	newFn = function(){

// 	};
// 	return function(){
// 		newFn();
// 		return a+20;
		
// 	}
// }
// var testFn = parentFn();
// console.log(testFn());

// //IIFE

// function calculateArea(r){
// 	var area = 0, pi = 3.14;
// 	// (function () {
// 	// 	var pi = 3.14;
// 	// 	area = pi * r * r;
// 	// })();
// 	area = pi * r * r;
// 	console.log(pi);
// 	return area;
// }

// var area = calculateArea(10);
// console.log(area);

// //IIFE + Closure

// var testVar = (function()
// {
// 	var a = 10;
// 	return function(){
// 		return a+20;
// 		newFn();;
// 	}
// });
// console.log(testVar);
// var fact = 1;
// function recursion(a){
// //console.log(a);
// if(a>1)
// {
// //console.log();
// fact = a*recursion(a-1);
// }
// else
// 	return fact
// }
// recursion(5);
// console.log(fact);
// for(let value of [10,20,30])
// {
// 	console.log(value);
// }

var i = 10.6;
console.log(typeof(i));
i = "Akash";
console.log(typeof(i));
i = false;
console.log(typeof(i));
var a;
console.log(a);
var b = null;
console.log(typeof(b));
var obj = {
	name: 'Akash',
	age: 33,
	email: 'akash@akash.com'
}
var test = "gender";
obj.gender = 'Male';
obj[test] = "Male";
console.log(typeof(obj));
var arr = [10, 20, 30];
console.log(typeof(arr));