"use strict";
var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.sayHello = function () {
        console.log("Hello " + name);
    };
    return MyClass;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
var names = sortByName([{ name: 'Akash', age: 33 }, { name: 'Akshay', age: 22 }, { name: 'Melvin', age: 26 }]);
