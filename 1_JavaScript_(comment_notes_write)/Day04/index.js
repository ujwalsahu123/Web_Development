//  comparison operartor
// number to number

let a1 = 1;
let a2 = 2;

console.log(a1 == a2);  // equals to 
console.log(a1!=a2);   // not equals to 
console.log(a1>a2);
console.log(a1<a2);
console.log(a1>=a2);
console.log(a1<=a2);

//--------------------------------------------------------------------
// seen of comparision operators :- (==, !=, >, <, >=, <=)
// it does Type Conversion before comparing the values.

// lets understand the seen with the help of == equal to opeator.

// the seen of == equal to operator :-
// the equal to operator will first convert the type of both values (if differnt dataypes) and try to convert them into a common type so that he can compare them. 
// So it first does - implicite type convertion (coercion) and then it compares those values. 
// ex - 

let num = 10;
let str = "10";
console.log(num==str);   // so here it first converts string to number , and then compare both numbers
// true


console.log("2" > 1);    // true, string is converted to number
console.log("02" > 1);   // true, string is converted to number


// so == is called loose equality -> since it gives true even tho both the values are of differnt datatype .
// so in this case - it can be dangerious and can give unexpected truthy matches.
// so to avoid this, we can use === and !== operators which do not convert the datatypes. 


// ===  strict equality


// (it solves the problem of loose equality - where it was doing type conversion.)

// Here it first does DATATYPE CHECK , then compare the value

// so strick eaulity === **do not convert the datatypes** & it check for both **VALUE and DATATYPE**.

// ex- 
let num1 = 10;
let str1 = "10";
console.log(num===str);   // so here it first check the datatype if same or not, and then check both values
// fale // since diff data type. 


// Alwaya use === strict equality . unless you intentonally want to compare diff datatype values


// there is also strick inqueality !== 
// "10" != 10    - false ( becasue after conversion,  10 is equal to 10 , thus inequality->false)
// "10" !== 10  - true ( bacause here it check type , and its differnt - so not equal , thus inequality->true)



//xtra-
let num2 = 10;
let str2 = "10xs";
console.log("ehello",num2==str2);   
// false ,    since conversion hoo hee nahi sakta str -> number . so directly it will give false


//--------------------------------------------------------------------

//** null == undefined 
// true  

// While == usually does type conversion into a common type and then compares, null and undefined are a special exception:
// When comparing  null == undefined 
//  then Neither of them are converted to a common type like - 0, false, ""  , etc . 
// it is a hardcoded exception that -> " If x is null and y is undefined (or vice versa), return true."



//** null=== undefined 
// false

// here in this case of strick equality - it does type check . and here its differnt - this false.



// console.log(undefined!=null);  
//  false ,
// it thinks they are equal . thus not unequal -so  false

// console.log(undefined!==null);  
// true , 
// since they are not equal . thus  unequal -so true 



//   HARDCODED RULE - 
//**  null == undifined   (null and undefined are equal == to each other)
//**  and they are NOT EQUAL TO ANY OTHER VALUE.
// ex - 
// null == 0 , null == fasle , null == "" , etc .... 
// underfined == 0 , undefined == false , undefined == "" , etc ...
// all these are false.


//--------------------------------------------------------------------


//// so now we know that null and undefined are equal to each other, but not equal to any other value.
// but we are also talking about comparison operators like >, <, >=, <= so for them - and for them there is no hardcoded rule for them
// so we also know that the comparision operator (==, < , > , <= , >= , !=) does type conversion before comparing.
// so if we do comparison operator with null and undefined, then their Type conversion happens.
// and they are converted to number , and then compared.

// so when using <, >, <=, >= with null and undefined, they are converted:
//**  null → 0
//** undefined → NaN




// null comparison

// console.log(null==0);  // fasle - since only equal to undefiend and nothing else (hardcoded exception)
// console.log(null!=0);  // true - since not equal to any other value except undefined

// console.log(null<0);   now here its doing type conversion of null to number 0 , and then comparing with 0. 
//so 0 < 0 is false.

// console.log(null>0);    0 > 0 is false
// console.log(null<=0);     0 <= 0 is true
// console.log(null>=0);     0 >= 0 is true




// undefined comparison

// console.log(undefined==0);  // false - since only equal to null and nothing else (hardcoded exception)
// console.log(undefined<0);    //  Nan < 0 is false
// console.log(undefined>0);    //  Nan > 0 is false
// console.log(undefined<=0);   //  Nan <= 0 is false
// console.log(undefined>=0);   //  Nan >= 0 is false









//** NaN compared to anything is always false, even to itself.
// (since NaN ka matlab -> kuch bhi nahi . so how can you campare it to anything , you cannot even compare kuch bhi nahi to kuch bhi nahi.)

// console.log(NaN==NaN);   // false since NaN is not equal to anything, not even itself.
// console.log(NaN==undefined);  // false
// console.log(NaN==null);      // false
// console.log(NaN==0);         // false
// console.log(Number("hello") == Number("hello"));      // false

// (and in the undefiend case, it is converted to NaN , so thats why all the comparisons with undefined are false.)












// let abc1 = 123;
// let abc2 = "123";
// let abc3 = 123;
// console.log(abc1==abc2==abc3);  // fasle since  123 == 123 -> true , but true =/= 123  differnt datatypes.







//------------------------------------------------------------------------------------------------------------------------
// logical operators   (&&, ||, !)


// let age = 18;
// let money =420;

// console.log( age<18 && money>200 );    // and - if both true then true , else false

// console.log(age>10 || money>200)     // or - if koi ek bhi true then true , else false

// console.log( !(age>10));     // not - // if true then false , if false then true




//------------------------------------------------------------------------------------------------------------------------

//  bitwise operartor (&, |, ^, <<, >>)   ( in bitwsie it first converts the number to binary and then does operation on each bit)

console.log(4&5);     // bitwise AND - compares each bit of both numbers . if BOTH bits 1 then 1 , else 0

console.log(11|14);   // bitwise OR - compares each bit of both numbers . if ANY ONE of the bits is 1 then 1 , else 0

console.log(5^7);       // bitwise XOR - compares each bit of both numbers . if ONLY ONE of the bits is 1 then 1 , else 0

console.log(5<<3);     // left shifts.   ( x << n )  -> x * (2^n)

console.log(20>>2);    // right shifts.     ( x >> n )  -> x / (2^n)


// 5 multiply by 2 power 3 // left shift
// 101.0000000000000000
// 101000.0000000

console.log(20>>2);
// right shift , 20 divided by 2 power 2
// 10100.000000
// 101.0000000


