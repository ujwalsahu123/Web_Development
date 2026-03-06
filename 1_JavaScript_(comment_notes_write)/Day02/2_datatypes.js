"use strict"; // treat all JS code as newer version

// alert("hello") // in browser there will be a alert shown.

console.log(3 
    +
     3) // this will work out , but code readability is not good. 

console.log("Hitesh")


let name = "hitesh" // string => ""
let age = 18 // number => 2 to power 53 - 1
let isLoggedIn = false // boolean => true/false
let state; // undefined => declare but not assigned. 
let nullValue = null // null => standalone value
// bigint
// symbol => unique






// we use typeof() operator , to know the datatype of a variable

console.log(typeof "Hitesh"); // string
console.log(typeof 3); // number
console.log(typeof 3.2); // number
console.log(typeof (1234n)); // bigint
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object            // here for null it is showing object, This is a bug in JavaScript that goes all the way back to its first version. 
// since js was developed in 10 days , so some bugs were there . and then we didnt fix that legacy code , since if we now try to fix it , then conficits hoga . and 
// saab kuch blunder ho jayega. so we are keeping it as it is.

// typeof returns a string . so to check you have to do like : (typeof(value) === "string")  ...


// in JS, whenever we play with string then use "".




 

// based on the way we store the data, we can classify the datatypes into two categories:
// 1. Primitive where the data is stored directly in the variable.  (basically the variable holds the actual value)
// 2. Reference (Non primitive) where the variable stores a reference to the data in memory. (basically the variable holds the address of the value in memory)



// - Primitive data type goes to Stack we get a copy of that value.  
// (ex: let a = 10; here a is stored in stack and it holds the value 10 directly. and when we do let b = a; then a new value in stack is created and assigned to b and waha par 10 store hoga. so both a and b are stored in stack and they hold the value 10 directly.)
// - Non-Primitive data type goes to Heap we get refrence of that value.  
// (ex: let arr = [1, 2, 3]; here arr is stored in stack and it holds the reference to the array which is stored in heap. and when we do let arr2 = arr; then arr2 also holds the reference to the same array in heap. so both arr and arr2 are stored in stack and they hold the reference to the same array in heap.)


// Dont Confuse :-
// declare meaning - to create a variable.
// define meaning - to assign a value to a variable.
// so undefined means that declared but not defined. 


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100          // number // store till +- 2^53 - 1
const scoreValue = 100.3   // number (in js both int and float are of type number)
const IsLoggedIn = false // boolean
const outsideTemp = null    // null
let userEmail; // undefined
let userPassword = undefined; // we can also do like this for undefined. but not good practice.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false, since symbols are unique and immutable. they are used to create unique identifiers for objects.

const bigNumber = 3456543576654356754n // BigINT can store upto +- 2^1024 -1 values.

// note:-
let user = "" ;   // this is not null or undefined, this is an empty string.






// Reference (Non primitive)
// Array, Objects, Functions
// IMP - to make Non primitive data type we use have to use let / const keyword here also.
 
// arrays are used to store multiple values in a single variable. 
const heros = ["shaktiman", "naagraj", "doga"];     
let heros2 = ["shaktiman", true , 23];     


// objects are similar like dictionaries in python, where we can store key value pairs. (no "key":value , directly key:value)
let myObj = {
    name: "hitesh",
    age: 22,
}                       

// Function is also a non primitive data type in js. and we can store function in a variable.
const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
// so here we can see that for array and object it is showing object, and for function it is showing function. 
// so in js there is no separate datatype for array and object, both are of type object. 
// but we can differentiate between them using Array.isArray() method. 
// ex -> Array.isArray(heros) -> true , Array.isArray(myObj) -> false









// -------------------------------------------------
// type of operator
let score = 100

console.log(typeof score);    // number
console.log(typeof(score));   // number    // both way are same

//----------------------------------------------------------------------------------------------------------




// so keep in mind to make variable , array , function , object ,.. we  use 'let'  'const' keyword
let var1 = 22
let var2 = 'hello'
let array1 = [1, 2, 3, 4, 5, "hello"]
let object1 = {
    name: "Rohit",
    age: 25,
}
let function1 = function() {
    console.log("Hello Coder Army");
}


//----------------------------------------------------------------------------------------------------------







// NON PRIMITIVE DATA TYPES -------------------------------------------------------


// array  (can store hetrogeneous data type in a single array) 
// let arr = [10,20,50,"rohit","mohit"];
// console.log(typeof arr);  -> "object"




// Object  (key:value)  / (same as dictionary in python)

//so to store multiple key:value type data (which are giving info about the same thing) we make a object of that thing and store all the info in key value pair. 

let obj = {
    key1: "value1",
    key2: "value2",
  }

// so instead of doing this : 
let user_name = "Rohit";
let account_number: 31242314213;
let balance: 420;

// we can make a object : 
let obj = {
   user_name: "Rohit",
   account_number: 31242314213,
   balance: 420
}

console.log(typeof obj);  // object


// to access entire object - obj_name
console.log(obj);

// to access each values of the object - we use the key name. 
object.key_name 
object["key_name"]

console.log(obj.user_name);  // Rohit
console.log( obj["user_name"] );  // Rohit





// // function

// we can store a function in a variable and then use that variable_name to call the function 

let fun = function(){
    console.log("Hello Coder army");
    return 10;
}

console.log(fun());

console.log(typeof(fun));  // function









// ----------------------------------------------------------------------------------------------------------

// Dynamic Typed Language -> aka implicit type conversion or coercion
// javascript is a dynamically typed language, since in dynamically typed languanges (automatically it gives the datatype as per the value) we don't have to explicitly declare the data type of a variable.
// and we can change the data type of a variable at runtime/later on in the code.
const vari = false
// so here we didnt explicitly declare the data type of the variable . so its doing IMPLICITE data type conversion.
// this is called implicit type conversion or coercion.

// Number data type -------------------

console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// deep dive :- 
// max interger value in javascript is 2^53 - 1, which is 9007199254740991. 
// javascript uses 64 bit ( double-precision floating-point format ) for storing numbers, 
// so why not 2^64 - 1 ? and why we can only store upto 2^53 - 1 ?   (in cpp 64bits datatype can store upto 2^64 - 1 values)
// lets suppose one bit for sign bit , so then also why not 2^63 - 1 ? 

// because JS Works like : --------------
//  out of that 64 bits 
// 1 bit is used for sign (positive or negative),  // so we cannot use it for storing value . 
// 11 bits are used for exponent                   // we cannot use it for storing value.
// 52 bits are used for mantissa (fractional part).  // we store value in this part.
// but 
// (so we use 52 bits from mantissa, and 1 bits we assume by default its 1 and we dont actually have that bit , we just assume there is a bit and its always 1.)
// so total bits we have for storing is 52 + 1 = 53 bits.
// so thus JS can store upto 2^53 - 1.  


// but why not store upto 2^53 ? why do you do 2^53 -1?
// because 0 is also a valid number, so we have to subtract 1 from the max value.
// ex - n = 5 .  {0 , 1  , 2 , 3 , 4 } last values is 4  , since we start counting from 0.

/// but why do we use this complex method of storing numbers using mantissa and exponent ? why not simply store the values like other languges do ?
// in js - we just dont directly do simple decimal to binary conversion to store a values in the memory. ex -> 5 = 101
// there is a Technique for stroing numbers , values ... 
// thats why there is matissa and exponent. and assuming 1 bit is always 1.
// ex - 5 = 101 , so we store it as 1.01 * 2^2 , 
// so 1 bit gone for sign , the 1.01  bit before the decimal (1) is the assumed bit which is always 1, 
// the bits after the decimal (01) are stored in the mantissa part, 
// and the exponent part (2^2) ka power (2) is stored in the exponent part.

// okay so you used the complex way of storing numbers using mantissa and exponent, so what is the benefit of that ? why not simply store the values like other languages do ?
// question - why didnt we do simply way of storing the values like 5 = 101 ? ,   so 2^63 hota in that case . 
// why did it uses the exponent concept which only gets you till 2^53 - 1 ? 
// because when we use this concept then we can store integers 25,99 and also float vlaues 3.14, 99.99 in the same datatype(Number) 

// so thats why languages (c , c++ , etc) which uses simple concept like 2^63 - 1, in that we have to mention the datatype and they are do Explecit datatype declaration . 
// to store INT datatype we have to mention int . and to store float datatype we have to mention float. so they have different datatypes for int and float values.
// thats why we have to mention the datatype - int , float . 
// but here in javascript there is no such datatype like int or float , there is datatype called NUMBER which store both int and float values.
// and this is possible bacuase js uses the (exponent concept) for storing values in the memory. so using that it can store INT values also and float values also in that 64 bit.

// so , thus it becomes easy for js to be dynamically typed since easily it can store int, float in the same variable and no need to do datatype conversion 
// since it uses the same method to store a nubmer (dosent matter the number is int or float )
// and no need to use 2 different methods for storing int and float values.


// So , what i think is -> since it is dynamically typed language, so we dont explicitly declare the datatype of a variable.
// So in Js there is no concept of int and float datatype , so to handle both int and float values in a single datatype (NUMBER)
// so to store both int and float values in a singe datatype (NUMBER) , js uses this complex method of storing values using mantissa and exponent.
// so it is like this -> every number is stored in Binary but in -> float format with exponent. ex -> 5 = 1.01 * 2^2 , 5.5 = 1.011 * 2^2 .
// and thus it can store both int and float values in a single datatype (NUMBER) .
