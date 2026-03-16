
console.log( (0.2 + 0.1) === 0.3)       // false
console.log(0.2 + 0.1)         // 0.30000000000000004

// In JavaScript, numbers are stored as binary floating-point numbers (64-bit, based on IEEE 754). and in this Format we can’t always represent decimal numbers exactly.

// The Issue:
// Some decimal numbers like 0.1 and 0.2 CAN'T be exactly represented in binary.
// if you want to store 0.1 in binary, it becomes an infinite repeating fraction (ex - 1/3 => 0.333....), which can’t be stored exactly in a finite number of bits. so WE TAKE AN APPROXIMATION . ex - 1/3 -> 0.33333... => 0.34. 
// so like that we also take approximation for decimal numbers like 0.1 and 0.2. so 0.1 becomes 0.10000000000000000555111512312
// So, when you add them together (e.g., 0.2 + 0.1), you get a result that's very close to the expected number, but not exact , since we are adding two approximate value .  
// so 0.1000000000000000555111512312 + 0.20000000000000001110223024625 = 0.30000000000000004440892098500626, which is not exactly equal to 0.3.

// so 0.2 + 0.1 -> will give 0.3 ... but its actaully 0.30000000000000004440892098500626 . 0.2 + 0.1 will not be equal to 0.3




//-----------------------------------------------------------------------

let num1 = 231;  // norammly we can make number like this. 

// using new Number() also we can make a number ... but it will be stored in a object (heap).
let num2 = new Number(231); 
console.log(num2); // object ->   [ Number : 231 ]
console.log(typeof num2); // object

let num3 = new Number(231);

console.log(num1==num2); // true 
// -> num1 is number and num2 is object so in comparision operation the datatype 
// is converted and then copmared ....
// num1 holds 231 value. num2 holds 25fx (mem add) where the value 231 is stored in heap.
// so, Number & Object => object is converted to number it holds as that mem location.
// so (231 == 25fx) -> (231 == 231) -> true


console.log(num2==num3); // false 
// -> num2 is object and num3 is object 
// num2 holds 25fx and num3 holds 32jw which are mem add of heap where the actual values are stoed.
// now the comparision operator tries to first make them to comparable data types... 
// so both are object so no convertion . 
// so (25fx == 32jw) -> false



// methods ---------------------------------------

let num = 231.68;


// num.toFixed(n)
// to get N digits after decimal point
// ✔ does rounding off
// ✔ returns a STRING
console.log(num.toFixed(2));  // "231.68"
console.log(num.toFixed(4));  // "231.6800"
console.log(num.toFixed(1));  // "231.7"


// num.toPrecision(n)
// to get TOTAL N significant digits (not just decimals)
// ✔ does rounding off
// ✔ returns a STRING
// counts digits from the first non-zero number  // ex: 00231 -> 231 (0 ignore)
console.log(num.toPrecision(6)); // "231.680"
console.log(num.toPrecision(4)); // "231.7"
console.log(num.toPrecision(3)); // "232"
console.log(num.toPrecision(2)); // "2.3e+2" // here it dosent give just 23 ... it will give full integer number in the exponenet format.


// num.toExponential(n)
// converts number to scientific (exponential) notation
// n = digits after decimal in the exponential form
// ✔ does rounding off
// ✔ returns a STRING
// format: a × 10^b
// 231.68 ≈ 2.3168 × 10²
console.log(num.toExponential(2)); // "2.32e+2"
console.log(num.toExponential(4)); // "2.3168e+2"
console.log(num.toExponential(6)); // "2.316800e+2"
console.log(num.toExponential(0)); // "2e+2"


// num.toString()
// converts number → string
// ✔ returns STRING
// no need to pass any value in ()
console.log(num.toString()); // "231.68"
console.log(typeof num.toString()); // "string"


// num.valueOf()
// simply returns that number
console.log(num.valueOf()); // 231.68



//  Math ---------------------------------------------
// Math is a built-in JavaScript object
// used for mathematical constants and functions

// Math constants -------------------------------------

// Math.E
// Euler's number (~2.718)
// the E used in log hai yeah. (Log n base e)
console.log(Math.E); // 2.718281828459045

// Math.LN10
// natural logarithm of 10
console.log(Math.LN10); // 2.302585092994046

// Math.PI
// value of π
console.log(Math.PI); // 3.141592653589793

// Math.LOG10E
// base 10 logarithm of E
console.log(Math.LOG10E); // 0.4342944819032518




// floor and ceil ------------------------------------

// Math.floor(n)
// returns the largest integer ≤ number
// basically removes decimal (round DOWN)
let num = 23.1;
console.log(Math.floor(num)); // 23
console.log(Math.floor(23.9)); // 23


// Math.ceil(n)
// returns the smallest integer ≥ number
// rounds UP
console.log(Math.ceil(num1)); // 24
console.log(Math.ceil(23.1)); // 24






// Math.random() -------------------------------------

// generates random number between
// 0 <= value < 1
// with decimals

console.log(Math.random()); 
// -> 3.23434342
// -> 5.53432332
// -> 6.35325232


// random number between 0–9   (also 0 and 9)
console.log(Math.floor(Math.random()*10));
// explanation
// Math.random() -> 0 to 0.999...
// *10 -> 0 to 9.999
// floor -> 0 to 9

// random number between 1–10
console.log(Math.floor(Math.random()*10)+1); 
// explanation // 0–9 + 1 -> 1–10

// or we can also do like :
console.log(Math.ceil(Math.random()*10)); 
// explanation
// Math.random() -> 0 to 0.999...
// *10 -> 0 to 9.999
// ceil -> 1 to 10


// random number between 0 - 99
console.log(Math.floor(Math.random()*100)+0);
// explanation
// Math.random()
// generates random number
// 0 <= value < 1
// Math.random()*100
// 0 <= value < 100
// Math.floor(...)
// removes decimal part
// so range becomes 0–99
// +0
// shifts starting point (here no change)
// final range
// 0–99

// random number between 1 - 100
console.log(Math.floor(Math.random()*100)+1);

// random number between 21 - 100
console.log(Math.floor(Math.random()*80)+21);


//---------------------
// so using Math.random() and floor and ceil . we can generate any random number between a range. (0-9, 1-53 , 15-27, ...)

// so 2 main things :-----------
// **** RANGE_N  -> HOW MANY DIFFERNT VALUES (10 values , 21 values , etc)
// **** STARTING  -> FROM WHERE TO START. 

// so if range_n = 10 and start is 20 then -> value range 20 to 31 

// So basically the formula to renerate a random number of range_N starting from S :
**********  Math.floor (Math.random() * range_N ) + Starting_value

// ex: - if you want a random number between 20 to 40 (including 20 and 40) -> thus range = 21 values . and starting value = 20
// so formula :-
 Math.floor (Math.random() * 21 ) + 20
// so now it will give a value between 20 to 40 and including 20 & 40.


// so a better way to write this formula -> for random number between min and max is:
// range = max - min + 1
// ex : range 20 to 40 -> 40 - 20 + 1 -> 21 
// thus we can write it like this:
*********** Math.floor( Math.random() * (max-min+1) ) + min;

// ex:
let min = 40;
let max = 50;
console.log(Math.floor( Math.random()* (max-min+1) ) + min); 
// explanation
// (max - min + 1) -> total numbers in range
// random*(range) -> random range
// + min -> shift start






// Ludo
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1));


// We can also generat OTP using it , but we dont .. since Math.random() is not truely random 
// it uses a Algo .... in which it takes the system clock (which is used to calc the time) (system clock dosent sleep even when ur device is shut down) and does certian operation on it.
// so hackers hacked ur sever then it can know the system clock value and can use the Same algo ... to get the same OTP 