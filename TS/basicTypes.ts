//Boolean
let x = 10, y = 20;
let bool: boolean = true;
let equalBool: boolean = (x == y);

//Numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = "blue";
color = 'red';
//String with template string
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

//Array
let list: number[] = [1, 2, 3];
let list_number: Array<number> = [1, 2, 3];
//list_number[2] = "Akash";


//Tuple
let tuple_arr: [string, number];
tuple_arr = ["hello", 10]; // OK
tuple_arr = [10, "hello"]; // Error
console.log(tuple_arr[0].substr(1)); // OK
console.log(tuple_arr[1].substr(1)); // Error, 'number' does not have 'substr'
//Accessing outside the known indices
tuple_arr[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(tuple_arr[5].toString()); // OK, 'string' and 'number' both have 'toString'
tuple_arr[6] = true; // Error, 'boolean' isn't 'string | number'

//enum
enum Color {Red, Green, Blue}
let c1: Color = Color.Green;
//Changing the start value of enum
enum Color01 {Red = 1, Green, Blue}
let c2: Color01 = Color01.Green;
//Manually setting all values in enum
enum Color02 {Red = 1, Green = 2, Blue = 4}
let c3: Color02 = Color02.Green;
//Enum to retrieve the value
enum Color03 {Red = 1, Green, Blue}
let colorName: string = Color03[2];
alert(colorName);

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//Any vs object
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//Mixed type array with any
let list_any: any[] = [1, true, "free"];
list_any[1] = 100;

//Void
function warnUser(): void {
    alert("This is my warning message");
}
//Void in var can only mean undefined or null
let unusable: void = undefined;

//Null and undefined
let u: undefined = undefined;
let n: null = null;

//Never
function error(message: string): never {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

//type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let someOtherValue: any = "this is a string";
let strOtherLength: number = (someOtherValue as string).length;