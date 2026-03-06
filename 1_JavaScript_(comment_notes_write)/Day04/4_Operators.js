// Remember -> (null -> 0) and (undefined -> NaN)

//----------------------------------------------------------------------------------------------------------

// Operators


// Arithmetic Operators ------------------------------

console.log(2+2);    // addition  +
console.log(2-2);   // subtraction   - 
console.log(2*2);   // multiplication  *
console.log(2**3);  // exponentiation **  (2 raised to the power of 3)
console.log(2/3);   // division  /
console.log(2%3);   // modulus  %  (remainder of division)  //2 divided by 3 gives remainder 2


// precedence :- 
// 1) ()
// 2) **
// 3) * , / , % 
// 4) + , -
// 5) left to right (if same precedence)


//note : - 
// Modulous give reminder
console.log(20%3);    // 2
// divide give quotient 





// increment operator (++) ,  decrement operator (--) ----------------------------------------------

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




// Assignment operator  ( = , += , -= , *= , /= , %= , **= ) ----------------------------------------------

let x = 20;

x+=10;  // x = x+10;
x-=5;   // x = x-5;
x*=2;   // x = x*2;
x/=5;   // x = x/5;
x%=3;   // x = x%3;
x**=2;  // x = x**2;



//----------------------------------------------------------------------------------------------------------

//  Comparison operartor (==, !=, === , !== >, <, >=, <=)  
// in comparision operator, we can not only compare number to number , but we can compare any two values of any datatype. 


// number to number ----------------------------

let a1 = 1;
let a2 = 2;
console.log(a1 == a2);  // equals to 
console.log(a1 != a2);   // not equals to 
console.log(a1 === a2)    // strick equals to
console.log(a1 !== a2)    // strick not equals to
console.log(a1 > a2);   // greater than 
console.log(a1 < a2);   // less than
console.log(a1 >= a2);  // greater than equal 
console.log(a1 <= a2);  // less than equal

// like this you can do with == , < , >  != , <= , >=  also. 
console.log("2" > 1);    // true, string is converted to number

console.log(10 == "10s");  // false , string "10s" becomes NaN. and NaN is not equal to anything, not even itself. so it gives false.


// Strick equality -----------------------

console.log(10 == "10");  // true

// so now you can see that when doing number with string , even tho "10" is a string , it is converted to number and then compared with 10. so it gives true.
// but this is not a good practice . thus we have strick equality operator (===) which does not do type conversion and thus gives false for 10 === "10" since they are of different datatypes. 
// so always use strict equality operator (===) to avoid unexpected results due to type conversion.

console.log(10 === "10");  // false , since it does not do type conversion and thus compares both value and datatype. so it gives false since they are of different datatypes.
console.log(10 !== "10");  // true , 

// so strick eaulity === **do not convert the datatypes** & it check for both **VALUE and DATATYPE**.
// ALWAYS use === strict equality . unless you intentonally want to compare diff datatype values



// Hardcoded Rule seen --------------------------------------

// Rules:
// 1) null == undifined   (null and undefined are equal == to each other)
// 2) and they are NOT EQUAL TO ANY OTHER VALUE.

null == undefined // true  

// the == operator usually does type conversion into a common type and then compares, but null and undefined are a special exception:
// When comparing  null == undefined 
// then Neither of them are converted to a common type like - 0, false, ""  , etc . 
// it is a hardcoded exception that -> " If x is null and y is undefined (or vice versa), return true."

null === undefined  // false
// here in this case of strick equality - it does type check . and here its differnt - this false.

console.log(undefined!=null);  
//  false ,
// it thinks they are equal . thus not unequal -so  false

console.log(undefined!==null);  
// true , 
// since they are not equal . thus  unequal -so true 


// null == 0 -> false
// null == true -> false
// null == false -> false
// null == "" -> false
// null == NaN -> false
// null == undefined -> true

// undefined == 0 -> false
// undefined == true -> false
// undefined == false -> false
// undefined == "" -> false
// undefined == NaN -> false
// undefined == null -> true


// null / undefined / NaN seen with other comparison operators (<, >, <=, >=) :---------------------------------------------------------------------


//// so we know the Hardcoded rule 
// (null == undefined) 
// (null and underfince != to anyother value) 

// But there is NO hardcoded rule for other comparison operators like >, <, >=, <= 
// so we also know that the comparision operator (==, < , > , <= , >= , !=) does type conversion before comparing.
// so if we do comparison operator with null and undefined, then their Type conversion happens.
// and they are converted to number , and then compared.

// so when using <, >, <=, >= with null and undefined, they are converted:
null → 0
undefined → NaN


// null comparison ----------------

console.log(null==0);  // fasle - // Dont foget Hardcoded rule.
console.log(null!=0);  // true - since not equal to any other value except undefined
console.log(null<0);  // false // now here its doing type conversion of null to number 0 , and then comparing with 0. 
console.log(null>0);  // false // 0 > 0 is false
console.log(null<=0); // true   //  0 <= 0 is true
console.log(null>=0); // true  // 0 >= 0 is true


// undefined comparison ----------------

console.log(undefined==0);   // false - since only equal to null and nothing else (hardcoded exception)
console.log(undefined<0);    //  Nan < 0 is false
console.log(undefined>0);    //  Nan > 0 is false
console.log(undefined<=0);   //  Nan <= 0 is false
console.log(undefined>=0);   //  Nan >= 0 is false



// NaN comparison ----------------

//** NaN compared to anything is always false, even to itself.
// (since NaN ka matlab -> kuch bhi nahi . so how can you campare it to anything , you cannot even compare kuch bhi nahi to kuch bhi nahi.)

console.log(NaN==NaN);   // false since NaN is not equal to anything, not even itself.
console.log(NaN==undefined);  // false
console.log(NaN==null);      // false
console.log(NaN==0);         // false
console.log(Number("hello") == Number("hello"));      // false

// (and in the undefiend case, it is converted to NaN , so thats why all the comparisons with undefined are false.)




// *********** Summary --------------------------------

// == , != , < , > , <= , >=  -> Converts to Same Datatype then Compares.
// === , !==  -> Checks the Datatype First, then compares the values.

// hardcoded exception
// 1) null == undefined -> true 
// 2) null and undefined are not equal to any other value except each other 
// 3) NaN is not equal to anything, not even itself. so all comparisons with NaN are false.
// 4) null and undefined are converted to number when compared with <, >, <=, >=  (null -> 0/"null"/false) (undefined -> NaN/"undefined"/false)

Number (==,!=,<,>,<=,>=) String -> string is converted to number and then compared
Number (==,!=,<,>,<=,>=) Boolean -> boolean is converted to number and then compared
String (==,!=,<,>,<=,>=) Boolean -> boolean is converted to String and then compared

null == undefined -> true (hardcoded exception)

null (==, !=) anyother -> null is not equal to any other value except undefined (hardcoded exception)
undefined (==, !=) anyother -> undefined is not equal to any other value except null (hardcoded exception)

null (<, >, <=, >=) anyother -> null is converted to (Number -> 0) (String -> "null") (Boolean -> false) and then compared
undefined (<, >, <=, >=) anyother -> undefined is converted to (Number -> NaN) (String -> "undefined") (Boolean -> false)and then compared

NaN (==, !=, <, >, <=, >=) anyother -> fasle , NaN is not equal to anything, not even itself. so all comparisons with NaN are false.





// Xtra: ------------------------------------

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1==abc2==abc3);  // fasle since  123 == 123 -> true , but true =/= 123  differnt datatypes.





//------------------------------------------------------------------------------------------------------------------------
// logical operators  (&&, ||, !)


let age = 18;
let money = 420;

console.log( age<18 && money>200 );    // and - if both true then true , else false

console.log(age>10 || money>200)     // or - if koi ek bhi true then true , else false

console.log( !(age>10));     // not - // if true then false , if false then true



//------------------------------------------------------------------------------------------------------------------------
//  bitwise operartor 
// (&, |, ^, <<, >>)   ( in bitwsie it first converts the number to binary and then does operation on each bit)

console.log(4&5);     // bitwise AND - compares each bit of both numbers . if BOTH bits 1 then 1 , else 0
console.log(11|14);   // bitwise OR - compares each bit of both numbers . if ANY ONE of the bits is 1 then 1 , else 0
console.log(5^7);       // bitwise XOR - compares each bit of both numbers . if ONLY ONE of the bits is 1 then 1 , else 0
console.log(5<<3);     // left shifts.   ( x << n )  -> x * (2^n)
console.log(20>>2);    // right shifts.     ( x >> n )  -> x / (2^n)


console.log(5<<3);     // left shift
// 5 * (2**3) 

console.log(20>>2);
// right shift , 20 divided by 2 power 2



//------------------------------------------------------------------------------------------------------------------------
// Ternary Operator  

// Shortcut for if-else.

let varialbe = condition ? True_value : False_value

age = 18;

// store the result
let can_driver = age >= 18 ? "yes" : "No";  

// use the result
console.log(age >= 18 ? "Adult" : "Minor")  

if( age>10? 1 : 0){
    console.log("Age is greater than 10");
}


//------------------------------------------------------------------------------------------------------------------------
// Type Operators 

// typeof operator--------------
// used to check the datatype of a value

console.log(typeof 10);          // number
console.log(typeof "hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object   (this is a famous JS bug)
console.log(typeof [1,2,3]);     // object
console.log(typeof {name:"jay"});// object
console.log(typeof function(){});// function



// instanceof operator----------------
// used to check if an object belongs to a specific class / constructor

object instanceof constructor


// examples

let arr = [1,2,3];
console.log(arr instanceof Array);     // true
console.log(arr instanceof Object);    // true

let obj = {name:"john"};
console.log(obj instanceof Object);    // true
console.log(obj instanceof Array);     // false

let date = new Date();
console.log(date instanceof Date);     // true

// example with function constructor
function Person(name){
    this.name = name;
}

let p1 = new Person("alex");
console.log(p1 instanceof Person);   // true
console.log(p1 instanceof Object);   // true








//------------------------------------------------------------------------------------------------------------------------
// Unary Operators  (+ , -)

// Unary Minus  (-) ---------------------------
// Converts a value to a number and then negates it (makes it negative).

let x = 5;
console.log(-x);     // -5

console.log(-"10");   // -10
// because the string "10" is first converted to number -> 10
// then unary minus makes it negative -> -10



// unary minus (-) can be used with

// -number
console.log(-22);   // -22

// -variable
let value = 3;
console.log(-value);   // -3

// -expression
console.log(-(2+3));   // -5

// -string number
console.log(-"50");    // -50 

// -invalid number string
console.log(-"hello"); // NaN

// -boolean
console.log(-true);    // -1  // true is converted to number 1 , then unary minus makes it negative -1
console.log(-false);   // 0   // false is converted to number 0 , then unary minus makes it negative 0 which is still 0

// -null
console.log(-null);    // 0  // null is converted to number 0 , then unary minus makes it negative 0 which is still 0

// -undefined
console.log(-undefined);   // NaN  // undefined is converted to NaN , then unary minus makes it negative NaN which is still NaN




// Unary Plus  (+) ---------------------------
// Converts any value to a number (without changing its sign)
// basically its like Number() function but with a shorter syntax.




console.log(+(10));       // Number(10) -> 10 
console.log(+(-10));       // Number(-10) -> -10 

console.log(+"10");         // Number("10") -> 10
console.log(+"100abc");     // NaN // because the string cannot be converted to a number
console.log(+"hitesh");    // NaN  (not a number)
console.log(+"");          // Number("") -> 0   (empty string → 0)  // 0  since empty string is converted to number , which is 0

console.log(+true);        // Number(true) -> 1
console.log(+false);       // Number(false) -> 0

console.log(+null);        // Number(null) -> 0
console.log(+undefined);   // Number(undefined) -> NaN



// so , 
// unary plus converts value to number -> like Number()
// unary minus converts value to number AND makes it negative -> like  - Number()
console.log(+"10");   // 10
console.log(-"10");   // -10






//------------------------------------------------------------------------------------------------------------------------
// String Concatenation using Binary Plus Operator (+)


// The + operator can be used to concatenate (join) strings.

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2

console.log(str3);      // "hello hitesh"



// Concatenation with Strings and Numbers------------------------------------

// When + is used with a string, JavaScript CONVERTS the other value to a string
// and performs concatenation instead of addition.


console.log("1" + 2);     // "12"
// "1" is a string → so 2 is converted to string → result = "12"

console.log(1 + "2");     // "12"
// number + string → number is converted to string → result = "12"



// ALSO the Precdence (left to right) matters when we have multiple + operators in the same expression.

console.log("1" + 2 + 2);   // "122"
// evaluation (left → right)
// "1" + 2 → "12"
// "12" + 2 → "122"

console.log(1 + 2 + "2");   // "32"
// evaluation (left → right)
// 1 + 2 → 3
// 3 + "2" → "32"


console.log("10" + 5 + 5);   // "1055"
console.log(10 + 5 + "5");   // "155"



// number + number → addition
// string + number → concatenation
// number + string → concatenation
// string + string → concatenation

// so
// string kisi kay bhi sath ayga then it converts to sting and then concatenation hoga.
// Presidence (left to right) also matters.  



// uniary plus VS binary plus ------------------------------------------------

// uniary plus -> converts value to number -> like Number()
// binary plus -> does addition or concatenation if sting.

// so 
console.log( 1 + "10");   // "110"
// here it should have done uniary plus : 1 + Number("10") -> 1 + 10 -> 11
// but it does binary plus : 1 + "10" -> "1" + "10" -> "110"

NOTE: when + operator used with String then it will always do Concatenation .


// Force Uniary Plus with String Concatenation ---------------------------------------------
// you can force it to do addition by using unary plus on the string operand. so that it will convert the string to number and then do addition instead of concatenation.

1 + +"10"
// +"10" → 10
// 1 + 10 → 11

+"5" + 2
// +"5" → 5
// 5 + 2 → 7


// Summary:-
// +value      → unary plus → convert to number
// value1 + value2       → binary plus → addition OR concatenation if any value is string

+"10"        // 10
1 + "10"     // "110"
1 + +"10"    // 11