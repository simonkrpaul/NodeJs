"use strict";
function countLines(text) {
    let count: number;
    //count = 10;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var line = text_1[_i];
        if (line.length !== 0) {
            count = count + 1;
        }
    }
    return count;
}
var a = countLines(["one", "two", "three"]);
var b = countLines(["one", null, "three"]);
var c = countLines([]);
// // function countLines(text?:string[]):number{
// // 	let count: number;
// // 	for(const line of text){
// // 		if(line.length !==0)
// // 		{
// // 			count = count+1;
// // 		}
// // 	}
// // 	return count;
// // }
// let a = countLines(["One", "Two", "Three"]);
// let b = countLines(["Hello", null, "World"]);
// let c = countLines(); 
