"use strict"; // treat all JS code as newer version

// alert("hello") // in browser there will be a alert shown.

console.log(3 
    +
     3) // this will work out , but code readability is not good. 

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;
let nullValue = null

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => declare but not assigned. 
// symbol => unique






// we use typeof() operator , to know the datatype of a variable

console.log(typeof "Hitesh"); // string
console.log(typeof 3); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object            // here for null it is showing object, This is a bug in JavaScript that goes all the way back to its first version. 
// since js was developed in 10 days , so some bugs were there . and then we didnt fix that legacy code , since if we now try to fix it , then conficits hoga . and 
// saab kuch blunder ho jayega. so we are keeping it as it is.



// in JS, whenever we play with string then use "".






 

// based on the way we store the data, we can classify the datatypes into two categories:
// 1. Primitive where the data is stored directly in the variable.
// 2. Reference (Non primitive) where the variable stores a reference to the data in memory.

// - Primitive data type goes to Stack we get a copy of that value.
// - Non-Primitive data type goes to Heap we get refrence of that value.  




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100          // number
const scoreValue = 100.3   // number (in js both int and float are of type number)
const IsLoggedIn = false // boolean
const outsideTemp = null    // null
let userEmail; // undefined
let userPassword = undefined; // we can also do like this for undefined. but not good practice.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false, since symbols are unique and immutable. they are used to create unique identifiers for objects.

const bigNumber = 3456543576654356754n

// note : let user = '';   // this is not null or undefined, this is an empty string.






// Reference (Non primitive)

// Array, Objects, Functions
 
const heros = ["shaktiman", "naagraj", "doga"];     // arrays are used to store multiple values in a single variable. 

// objects are similar like dictionaries in python, where we can store key value pairs.
let myObj = {
    name: "hitesh",
    age: 22,
}                       

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); // function




const vari = false
// so here we didnt explicitly declare the data type of the variable . so its doing implicit data type conversion.
// this is called implicit type conversion or coercion.

// javascript is a dynamically typed language, since in dynamically typed languanges (automatically it gives the datatype as per the value) we don't have to explicitly declare the data type of a variable.
// and we can change the data type of a variable at runtime/later on in the code.






console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991

// deep dive :- 
// max interger value in javascript is 2^53 - 1, which is 9007199254740991. 
// javascript uses 64 bit ( double-precision floating-point format ) for storing numbers, 
// so why not 2^64 - 1 ? and why we can only store upto 2^53 - 1 ?   (in cpp 64bits datatype can store upto 2^64 - 1 values)
// lets suppose one bit for sign bit , so then also why not 2^63 - 1 ? 

// because out of that 64 bits 
// 1 bit is used for sign (positive or negative),  // so we cannot use it for string value . 
// 11 bits are used for exponent, and              // we cannot use it for string value.
// 52 bits are used for mantissa (fractional part).  // we store value in this part.
// 
// so we use 52 bits form mantissa, and 1 bits we assume by default its 1 and we dont actually have that bit , we just assume there is a bit and its always 1.
// so total bits we have for storing is 52 + 1 = 53 bits.
// so thus we can store upto 2^53 - 1.  and not 2^64 - 1.

// but then why not just 2^53 ? why do you do 2^53 -1?
// because 0 is also a valid number, so we have to subtract 1 from the max value.
// ex - n = 5 .  {0 , 1  , 2 , 3 , 4 } last values is 4  , since we start counting from 0.

// in js - we just dont directly do simple decimal to binary conversion to store a values in the memory. ex -> 5 = 101
// there is a Technique for stroing numbers , values ... 
// thats why there is matissa and exponent. and assuming 1 bit is always 1.
// ex - 5 = 101 , so we store it as 1.01 * 2^2 , 
// so 1 bit gone for sign , the 1.01  bit before the decimal (1) is the assumed bit which is always 1, 
// the bits after the decimal (01) are stored in the mantissa part, 
// and the exponent part (2^2) ka power (2) is stored in the exponent part.


// question - why didnt we do simply way of storing the values like 5 = 101 ? ,   so 2^63 hota in that case . 
// why did it uses the exponent concept ? 
// because when we use this concept then we can also store decimal values like 5.5 , 90.75  ...etc any decimal value 

// so thats why languages (c , c++ , etc) which uses simple concept like 2^63 - 1, they store int datatype in differnt way and float datatype in different way.
// thats why we have to mention the datatype - int , float . 
// but here in javascript there is no such datatype like int or float , there is datatype called NUMBER which store both int and float values.
// and this is possible bacuase js uses the (exponent concept) for storing values in the memory. so using that it can store int values also and float values also in that 64 bit.
// so , thus it becomes easy for js to store int , float since it uses the same method to store a nubmer (dosent matter the number is int or float )
// and no need to use 2 different methods for storing int and float values.


// So , what i think is -> since it is dynamically typed language, so we dont explicitly declare the datatype of a variable.
// So in Js there is no concept of int and float datatype , so to handle both int and float values in a single datatype (NUMBER)
// so to store both int and float values in a singe datatype (NUMBER) , js uses this complex method of storing values using mantissa and exponent.
// so it is like this -> every number is stored in Binary but in -> float format with exponent. ex -> 5 = 1.01 * 2^2 , 5.5 = 1.011 * 2^2 .
// and thus it can store both int and float values in a single datatype (NUMBER) .
