var strVal = "I am a string";
console.log(strVal + ": " + typeof(strVal));
strVal = 12;
console.log(strVal + ": " + typeof(strVal));
var bool = true;
console.log(bool + ": " + typeof(bool));
var valUndefined;
console.log(valUndefined);
var nullVal = null;
console.log(nullVal + ": " + typeof(nullVal));
var obj = {name: 'Akash', age: 33, height: 183};
console.log(obj + ": " + typeof(obj));
var arr = new Array();
console.log(arr + ": " + typeof(arr));
var regex = /Akash/;
var regexLCase = /akash/;
var regexCaseInsensitive = /akash/i;
var regexGlobal = /Akash/g;
var testStr = "What can I say, Akash is an awesome guy! Not to mention, Akash is also stupid.";
console.log(testStr.search(regex));
console.log(testStr.search(regexLCase));
console.log(testStr.search(regexCaseInsensitive));
console.log(testStr.search(regexGlobal));
console.log(typeof(regex));
//compare operators
var str = '3';
str = parseInt(str)
var num = 3;
console.log(str==num);
console.log(str+num);

