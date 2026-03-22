

//----------------------------------------------------------------------------------------------------------

// Explicit Type conversion --> used to convert the datatype 

// we can convert one datatype to another using Number(), String(), Boolean() functions.
// first letter capital.  
Number()
String()
Boolean()
parseInt()
parseFloat()

// IMP notes -> NaN is Not a Number, so it is there when you try to represent a value as a number but it cannot be converted to a number, thus it gives NaN. 
// and (typeof (NaN)) is -> Number.




//Number() -----------------------------------

let num = Number("100"); // string -> number // typeof(num) -> Number

// but aisa nahi ki koi bhi string ko number mein convert kar diya . only numeric string can be converted.
let num = Number("100abc"); // string -> number // since "100abc" cannot be converted to a number, thus it gives NaN // typeof(num) -> Number ,since NaN is of type Number

let x = Number(true);  // Boolean -> number // true -> 1 // typeof(x) -> Number
let y = Number(false); // Boolean -> number // false -> 0 // typeof(y) -> Number
//  true ->  1 ,   false  -> 0

let x = Number(null);  // null -> number // null can be converted into number(0) // typeof(x) -> Number
// null -> 0

let x = Number(undefined);  // undefined -> number // since undefined cannot be converted to a number, thus it gives NaN  // typeof (x) -> Number

let x = Number(""); // empty string -> number // empty string can be converted to number(0) // typeof(x) -> Number


100 -> 100  (Number)
"100" -> 100 (Number)
"100abc" -> NaN (Number)
"" -> 0 (Number)      //NOTE: empty string can be converted to number() . and it will be converted to 0. 
true -> 1 (Number)
false -> 0 (Number)
null -> 0 (Number)   //NOTE: null can be converted to number() and it will be converted to 0 . dont forget this.
undefined -> NaN (Number)
NaN -> NaN (Number)

// so IMP -> convert too hoojayga to Number() datatype . but the value may not be converted to a number , and thus NaN aajaayga. and NaN is of type Number.



// String() ------------------------------------

let x = String(100); // number -> string // "100" // typeof (x) -> String
let x = String(100.5); // number -> string // "100.5" // typeof (x) -> String
let x = String(true); // boolean -> string // "true" // typeof (x) -> String
let x = String(false); // boolean -> string // "false" // typeof (x) -> String
let x = String(null); // null -> string // "null" // typeof (x) -> String
let x = String(undefined); // undefined -> string // "undefined" // typeof (x) -> String
let x = String(NaN); // NaN -> string // "NaN" // typeof (x) -> String
let x = String(""); // empty string -> string // "" // typeof (x) -> String


// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"
// NaN => "NaN"
// "" => "" 



// Boolean() ------------------------------------


// 1 => true // non zero number
// -25 => true // non zero number
// 25.5 => true // non zero number
// 0 => false // zero number
// "hitesh" => true // non empty string
// "" => false // empty string
// " " => true // string with space is non empty string
// "0" => true // non empty string
// null => false     
// undefined => false
// NaN => false

// falsey values in JavaScript are: 
// false, 0, "", null, undefined, NaN               // ***Remember this 
// everyting else is truthy value in JavaScript.



// parseInt() -------------------------------

// parseInt() is used to convert a string to an integer. it takes a string as input and returns an integer. it will parse the string until it finds a non numeric character and then it will stop parsing and return the integer value parsed so far. if the first character of the string is non numeric then it will return NaN.

100 => 100
"100" => 100
"100abc" => 100
"abc100" => NaN
"100.5" => 100
"100.5abc" => 100
"100abc200" => 100
"abc100def" => NaN
"abc" => NaN
"" => NaN


// parseFloat() -------------------------------

// parseFloat() is used to convert a string to a floating point number. it takes a string as input and returns a floating point number. it will parse the string until it finds a non numeric character and then it will stop parsing and return the floating point number parsed so far. if the first character of the string is non numeric then it will return NaN.

100 => 100
"100" => 100
"100abc" => 100
"100.5" => 100.5
"100.5abc" => 100.5
"100.5abc200" => 100.5
"abc100def" => NaN
"abc" => NaN
"" => NaN




