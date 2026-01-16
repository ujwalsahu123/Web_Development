// type of operator
let score = 100

console.log(typeof score);    // number
console.log(typeof(score));   // number    // both way are same

//----------------------------------------------------------------------------------------------------------




// so keep in mind to make variable , array , function , object ,.. we  use 'let' keyword
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


// NON PRIMITIVE DATA TYPES 


// array  (can store hetrogeneous data type in a single array) 
// let arr = [10,20,50,"rohit","mohit"];
// console.log(typeof arr);  -> "object"






// Object  (key:value)  / (same as dictionary in python)

//so to store multiple key:value type data (which are giving info about the same thing) we make a object of that thing and store all the info in key value pair. 

// let obj = {
//     key1: "value1",
//     key2: "value2",
//   }

// so instead of doing this : 
// let user_name = "Rohit";
// let account_number: 31242314213;
// let balance: 420;

// we can make a object : 
// let obj = {
//    user_name: "Rohit",
//    account_number: 31242314213,
//    balance: 420
// }
// 
//console.log(typeof obj);  // object


// to access entire object - obj_name

// console.log(obj);

// to access each values of the object - we use the key name. 

// object.key_name 
// object["key_name"]

// console.log(obj.user_name);  // Rohit
// console.log(  obj["user_name"]  );  // Rohit
// console.log(obj.balance);  // 420





// // function

// we can store a function in a variable and then use that variable_name to call the function 

// let fun = function(){
//     console.log("Hello Coder army");
//     return 10;
// }

// console.log(fun());

// console.log(typeof(function))  -  function




//----------------------------------------------------------------------------------------------------------




// Type conversion --> used to convert the datatype 

// we can convert one datatype to another using Number(), String(), Boolean() functions.
// first letter capital.  



//                   Number()

// 1) using this we can convert a string to number
// let account_balance = "100";   
// let num = Number(account_balance);


// but aisa nahi ki koi bhi string ko number mein convert kar diya . only numeric string can be converted.
// let account = "100xs";
// let bal = "200s"
// console.log(Number(account));    / NaN  not a number , you are tyring to convert it to a number but not possible so it gives NaN.
// console.log(Number(bal));        / NaN

// console.log(typeof account_balance);    // string
// console.log(typeof num);   // number



// 2) Boolean to number
// let x = false;
// console.log(Number(x));   // 0
//  true ->  1 ,   false  -> 0



// 3) null to number 

// let x1 = null;
// console.log(Number(x1));  / 0
// null -> 0

// 4)undefined to number
// let x2;
// console.log(Number(x2));  // NaN   (there is nothing , so it tell not a number)


// so 
let nameFirst = "hitesh"

let valueInNumber = Number(nameFirst)

console.log(typeof valueInNumber);        // number  // convert too hogaya string to number
console.log(valueInNumber);               // NaN (Not a Number) - but when we try to convert a string that cannot be converted to a number it will return NaN

// to number conversion
// Number(value/variable)

// "33" => 33    // can be converted to number
// "33abc" => NaN    // cannot be converted to number
//  true => 1; false => 0
// null => 0
// undefined => NaN
// NaN => NaN
// "" => 0






//                      String()

// 1) number to string
// let ab = 20;
// console.log(String(ab));
// "20"    (easy convert hoga)

// 2) boolean to string
// let ax = false; 
// console.log(String(ax));
// "false"       (string ban gaya)



// to string conversion
// String(value/variable)

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"
// NaN => "NaN"
// "" => "" (empty string)








//                      Boolean()

// let str_var = " hello ";
// console.log(Boolean(str_var));  // true
// let str_var1 = "";
// console.log(Boolean(str_var1));  // false
// (non empty string -> true, empty string -> false)


// to Boolean conversion
// Boolean(value/variable) 

// 1 => true // non zero number
// 0 => false // zero number
// "hitesh" => true // non empty string
// "" => false // empty string
// null => false
// undefined => false
// NaN => false
// "0" => true // non empty string





//----------------------------------------------------------------------------------------------------------


// Operators






// Arithmetic Operators

// ARITEMETIC OPERATORS

console.log(2+2);    // addition  +
console.log(2-2);   // subtraction   - 
console.log(2*2);   // multiplication  *
console.log(2**3);  // exponentiation **  (2 raised to the power of 3)
console.log(2/3);   // division  /
console.log(2%3);   // modulus  %  (remainder of division)  2 divided by 3 gives remainder 2



// precedence :- 

// 1st bracket ()
// 2nd bodmas * , /  then + , -
// 3rd left to right (if same precedence)


//note : - 
// Modulous give reminder
console.log(20%3);    // 2

// divide give quotient 











// increment operator (++) ,  decrement operator (--)

// var++ means access the variable first and then increment it by 1
// ++var means increment the variable by 1 and then access it
// var-- means access the variable first and then decrement it by 1
// --var means decrement the variable by 1 and then access it


let sum = 20;
 
// sum++ post increment , sum-- post decrement
console.log(sum++);  // 20
console.log(sum);    // 21

// ++sum pre increment , --sum. pre decrement      
sum = 20
let total = ++sum;
console.log(total);   // 21
console.log(sum);      // 21









// Assignment operator  ( = , += , -= , *= , /= , %= , **= )

let x = 20;

x+=10;  // x = x+10;

console.log(x);  // 30


x/=10;
console.log(x);  // 3









//----------------------------------------------------------------------------------------------------------


//string concatenation
// we can use + operator to concatenate strings
let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);     // "hello hitesh"

// we can also use + operator to concatenate strings and numbers but will take the datatype of the first operand
console.log("1" + 2);   // 12    here "1" is a string so it will concatenate with 2 as a string
console.log(1 + "2");   // 12   // here 1 is a number so it will concatenate with "2" as a string
console.log("1" + 2 + 2);   // 122  // here "1" is a string so it will concatenate with 2 as a string and then again concatenate with 2 as a string
console.log(1 + 2 + "2"); // 32     // here 1 and 2 are numbers so it will add them first and then concatenate with "2" as a string


// we can also use the unary plus operator (+) to convert a value to a number
console.log(+true);  // 1  since true is converted to number , which is 1
console.log(+"");    // 0  since empty string is converted to number , which is 0
console.log(+"hitesh"); // NaN  since "hitesh" is not a number so it will return NaN
console.log(+"null"); // 0  since null is converted to number , which is 0
console.log(+"undefined"); // NaN  since undefined is not a number so it will return NaN



// uniary minus 
let value = 3
let negValue = -value     // so here we can use - opertor to convert a VARIABLE value to negative
console.log(negValue);   // -3


