
console.log( (0.2 + 0.1) === 0.3)       // false
console.log(0.2 + 0.1)         // 0.30000000000000004

// In JavaScript, numbers are stored as binary floating-point numbers (64-bit, based on IEEE 754). and in this Format we can’t always represent decimal numbers exactly.

// The Issue:
// Some decimal numbers like 0.1 and 0.2 CAN'T be exactly represented in binary.
// if you want to store 0.1 in binary, it becomes an infinite repeating fraction (ex - 1/3 => 0.333....), which can’t be stored exactly in a finite number of bits. so WE TAKE AN APPROXIMATION . ex - 1/3 -> 0.33333... => 0.34. 
// so like that we also take approximation for decimal numbers like 0.1 and 0.2. so 0.1 becomes 0.10000000000000000555111512312
// So, when you add them together (e.g., 0.2 + 0.1), you get a result that's very close to the expected number, but not exact , since we are adding two approximate value .  
// so 0.1000000000000000555111512312 + 0.20000000000000001110223024625 = 0.30000000000000004440892098500626, which is not exactly equal to 0.3.





//-----------------------------------------------------------------------


// let num1 = 231;
// let num2 = new Number(231);
// let num3 = new Number(231);
// console.log(num1==num2);
// console.log(num2==num3);
// true and false
// console.log(num2);
// console.log(typeof num2);

// let num = 231.68;
// console.log(num.toFixed(3));
// console.log(num.toPrecision(4));
// console.log(num.toExponential(2));
// console.log(typeof num.toString());
// console.log(num.valueOf());

//  Math

// console.log(Math.E)
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.LOG10E);

// floor and ceil
// let num1 = 23.1;
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));

// console.log(Math.floor(Math.random()*10));
// 0<=value<1
// 0-9

// 1-10 generate
// console.log(Math.floor(Math.random()*10)+1)

// 11-20 generate
// console.log(Math.floor(Math.random()*10)+11);
// 0-9 + 11

// min = 40 , max =50;
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0-9
// console.log(Math.floor(Math.random()*10));

// 0-10
// 2-12
// console.log(Math.floor(Math.random()*11+2));
// 30-40
// console.log(Math.floor(Math.random()*(40-30+1)+30));

// Ludo
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1));
