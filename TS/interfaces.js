"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ES5 way
function printLabel_old(labelledObj) {
    console.log(labelledObj.label);
}
var myObj_old = { size: 10, label: "Size 10 Object" };
printLabel(myObj_old);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
function createSquare_ad(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare_ad = createSquare_ad({ color: "black", width: 100 });
var myPoint = { x1: 10, y1: 20 };
myPoint.x1 = 5; // error!
//Readonly array
var arr_01 = [1, 2, 3, 4];
var ro = arr_01;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
arr_01 = ro; // error!
//overriding readonly with type assertion
arr_01 = ro;
function createSquare_ex(config) {
    // ...
}
var mySquare_ex = createSquare_ex({ colour: "red", width: 100 });
//Overcoming with type assertions
mySquare_ex = createSquare({ width: 100, opacity: 0.5 });
//Another way to override
var squareOptions = { colour: "red", width: 100 };
var mySquare_an = createSquare(squareOptions);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
//names need not match
var mySearch_01;
mySearch_01 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
//Not specifying the type
var mySearch_02;
mySearch_02 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
indexing;
with (number)
    and;
string;
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
