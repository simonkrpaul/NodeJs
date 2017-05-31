"use strict";
// class MyClass {	
// 	name: string;
// 	constructor(){
// 		this.a = 10;
// 	};
// 	sayHello(){
// 		console.log("Hello "+name);
// 	}
// }
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}
var names = sortByName([{ name: 'Akash', age: 33 }, { name: 'Akshay', age: 22 }, { name: 'Melvin', age: 26 }]);
