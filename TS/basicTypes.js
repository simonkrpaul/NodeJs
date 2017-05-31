"use strict";
//Boolean
var x = 10, y = 20;
var bool = true;
var equalBool = (x == y);
//Numbers
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//string
var color = "blue";
color = 'red';
//String with template string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//Array
var list = [1, 2, 3];
var list_number = [1, 2, 3];
//list_number[2] = "Akash";
//Tuple
var tuple_arr;
tuple_arr = ["hello", 10]; // OK
tuple_arr = [10, "hello"]; // Error
console.log(tuple_arr[0].substr(1)); // OK
console.log(tuple_arr[1].substr(1)); // Error, 'number' does not have 'substr'
//Accessing outside the known indices
tuple_arr[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(tuple_arr[5].toString()); // OK, 'string' and 'number' both have 'toString'
tuple_arr[6] = true; // Error, 'boolean' isn't 'string | number'
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
//Changing the start value of enum
var Color01;
(function (Color01) {
    Color01[Color01["Red"] = 1] = "Red";
    Color01[Color01["Green"] = 2] = "Green";
    Color01[Color01["Blue"] = 3] = "Blue";
})(Color01 || (Color01 = {}));
var c2 = Color01.Green;
//Manually setting all values in enum
var Color02;
(function (Color02) {
    Color02[Color02["Red"] = 1] = "Red";
    Color02[Color02["Green"] = 2] = "Green";
    Color02[Color02["Blue"] = 4] = "Blue";
})(Color02 || (Color02 = {}));
var c3 = Color02.Green;
//Enum to retrieve the value
var Color03;
(function (Color03) {
    Color03[Color03["Red"] = 1] = "Red";
    Color03[Color03["Green"] = 2] = "Green";
    Color03[Color03["Blue"] = 3] = "Blue";
})(Color03 || (Color03 = {}));
var colorName = Color03[2];
alert(colorName);
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//Any vs object
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//Mixed type array with any
var list_any = [1, true, "free"];
list_any[1] = 100;
//Void
function warnUser() {
    alert("This is my warning message");
}
//Void in var can only mean undefined or null
var unusable = undefined;
//Null and undefined
var u = undefined;
var n = null;
//Never
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//type assertions
var someValue = "this is a string";
var strLength = someValue.length;
var someOtherValue = "this is a string";
var strOtherLength = someOtherValue.length;
