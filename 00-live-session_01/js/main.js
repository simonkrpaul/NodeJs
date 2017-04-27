function Player(){
	this.energy = 50;
	this.agility = 50;
	this.ht = 183;
}
Player.prototype.kick = kick;
function kick(){
	console.log("Kicking");
}
var cobra = new Player;
var snakeEyes = new Player;
snakeEyes.energy = 80;
console.log(cobra.energy, snakeEyes.energy);
cobra.kick();
// Array sort, min, max, x, y, z
// mergesort
// Array.prototype.mergeSort = function(){}
// var arr = new Array;
// var sortedArr = arr.mergeSort();

console.log(Player.prototype);
///////////////////////////////////////
//closures
function wallColor(){
	var colors = ['red', 'green', 'blue'];
	function calculateColor(indx){
		return colors[indx];
	}
	return function(inp){
		return calculateColor(inp)
	}
}
var getMeTheColor = wallColor();
console.log(getMeTheColor(2));
///////////////////////////////////////
//IIFE - Immediately Invoked Function Expression
function test(){
	var a = 0;
	(function(){
		var logVar = 10, someVar = 20;
		a = Math.log(logVar)+ someVar;
	})()
	console.log(a);	
}
//////////////////////////////////////////////
var a = 10;
var obj = {a: 30, b: 20};
obj.player = function(){
	//this.a = 20;
	console.log(this.a)
}


obj.player();
//call site
////////////////////////////////////////////////

//Singleton - pattern

var a = {name: 'Akash', email: 'something@o=some.com'};
//a = null;
if(!a)
{
	a = {name: 'Amit', email: 'something@o=some.com'};
}
console.log(a);