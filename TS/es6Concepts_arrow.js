"use strict";
//Arrow function
var _this = this;
function foo(x, y) {
    return x + y;
}
// versus
var foo = function (x, y) { return x + y; };
//Variations
var f1 = function () { return 12; };
var f2 = function (x) { return x * 2; };
var f3 = function (x, y) {
    var z = x * 2 + y;
    y++;
    x *= 3;
    return (x + y + z) / 2;
};
//this operator
//old way
var controller = {
    makeRequest: function () {
        var self = this;
        btn.addEventListener("click", function () {
            // ..
            self.makeRequest();
        }, false);
    }
};
//new way
var controller = {
    makeRequest: function () {
        var _this = this;
        btn.addEventListener("click", function () {
            // ..
            _this.makeRequest();
        }, false);
    }
};
//Not valid
var controller = {
    makeRequest: function () {
        console.log(_this);
        //this.helper();
    },
    helper: function () {
        console.log("Hi!");
    }
};
controller.makeRequest();
