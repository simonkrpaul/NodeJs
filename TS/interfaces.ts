//ES5 way
function printLabel_old(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj_old = {size: 10, label: "Size 10 Object"};
printLabel(myObj_old);

//TS way with interfaces
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//optional properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

//Advantage - warnings
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare_ad(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare_ad = createSquare_ad({color: "black", width: 100});

//Readonly properties
interface Point01 {
    readonly x1: number;
    readonly y1: number;
}
let myPoint: Point01 = {x1: 10, y1: 20};
myPoint.x1 = 5; // error!

//Readonly array
let arr_01: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr_01;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
arr_01 = ro; // error!
//overriding readonly with type assertion
arr_01 = ro as number[];

//Excess properties
interface SquareConfig_ex {
    color?: string;
    width?: number;
}

function createSquare_ex(config: SquareConfig): { color: string; area: number } {
    // ...
}
let mySquare_ex = createSquare_ex({ colour: "red", width: 100 });
//Overcoming with type assertions
mySquare_ex = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

//Better approach - Index signature
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
//Another way to override
let squareOptions = { colour: "red", width: 100 };
let mySquare_an = createSquare(squareOptions);

//Function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
//names need not match
let mySearch_01: SearchFunc;
mySearch_01 = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
//Not specifying the type
let mySearch_02: SearchFunc;
mySearch_02 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//Indexable types - Like functions, index signature can be used for vars
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

indexing with number and string
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}