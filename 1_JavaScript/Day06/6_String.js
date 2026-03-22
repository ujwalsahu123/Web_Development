//============================================================================================

// string in js
let str1 = "Hello Coder army";  // using ""
let str2 = 'Mein toh mast hu'; // using ''
let str3 = `Aur bhaiya kya haal chaal`; // using backticks ``
 
let price = 80;
let str4 = `price of the fresh tomato is ${price} , get is asap`;  // string interpolation using backticks and ${variableName}
let str5 = "price of the fresh tomato is " + price + " , get is asap";  // string concatenation using + operator


console.log(`price of the fresh tomato is ${price} , get is asap`);
console.log("price of the fresh tomato is", price , "get it asap");

//  string concatentaion
let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1+s2;
console.log(s3.length);    // .length is used to find the length of the string.

// note : its .length and not .length() . 
// sirf str.length we write directly , and all other str.method() we wirte with () .

console.log(' "hello coder army" '); //  "hello coder army"

console.log(" 'hello coder army' "); // 'hello coder army'

// Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.
let message = "Rohit Bhaiya bhut bade badmash hai. \n Wo bhut gande insaan hai."; // use \n for new line in string.  

// escape character (\) so that if you want to print a Special chracter then you have to use esaple before it.
let comment = "Rohit Bhaiya bhut bade badmash hai. \\nWo bhut gande insaan hai."
console.log(comment); // Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai. 


// Indexing in string
let special = "Rohit";
 // access a character of a string using index.  (index starts from 0)
console.log(special[4]);  // t
console.log(special.charAt(4)); // t


// to lowercase
// to uppercase
console.log(special.toLowerCase());
let strtemp = special.toUpperCase();
console.log(special); // original string is not changed since string is immutable in js. so it will print the original string only.
console.log(strtemp); 

// Searching in string
let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder")); // 6 , it gives the index of fist char of the first occurence of the substring "Coder". 
console.log(hero.lastIndexOf("Coder")); // 18 , it gives the index of fist char of the last occurence of the substring "Coder".
console.log(hero.indexOf("coder")); // -1 , since it is case sensitive. so it will not find the substring "coder" and thus return -1.
console.log(hero.includes("Coder")); // true , since it is case sensitive and it will find the substring "Coder" and thus return true.

// its not like ki it only checks for the first character of the substring. so it will not just check C it will check the entire substring Cat is present or not. 
console.log(hero.indexOf("Cat")) // -1 , since it will not find the substring "Cat" and thus return -1.      


let newstring = "HeloDon";
//0 1 2 3 4 5 6   (indexing)
//-7 -6 -5 -4 -3 -2 -1  (negative indexing)

// .slice()
console.log(newstring.slice(1,3));  // (start, stop) . start included , stop not included.
// .substring()
console.log(newstring.substring(0,3));

// slice and substring are used to extract a part of the string and return a new string.
// slice can take negative index also;
console.log(newstring.slice(-6,5)); // indexing using negative index // eloDo

console.log(newstring.substring(-6,5)); // substring does not take negative index , so it will treat -6 as 0. so it will return "HeloD" since stop index is 5 and it will not include the character at index 5.
// -ve index it convert to 0.

console.log(newstring.slice(4,1));  // empty sting since only forward indexing hota hai, and not backward. (so start must be > stop)
console.log(newstring.slice(-2,4)); // empty sting.
console.log(newstring.substring(4,1)); // substring will swap the index if start is greater than stop. so it will treat it as substring(1,4) and return "eloD".

console.log(newstring.slice(2,2));  // empty string since start and stop index are same.
console.log(newstring.substring(2,2)); // empty string since start and stop index are same.

// .substr() is also used to extract a part of the string and return a new string. but it takes (start, length) as parameters. so it will start from the index "start" and will extract "length" number of characters from the string.
console.log(newstring.substr(2,3)); // loD , it will start from index 2 and will extract 3 characters from the string. so it will extract "loD".


let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money")); // Hello Money Kaise ho Ji , it will replace only the first occurence of the substring "Ji" with "Money".
console.log(str10.replaceAll("Ji","Money")); // Hello Money Kaise ho Money , it will replace all the occurence of the substring "Ji" with "Money".


let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! ")); // [ 'Money', 'honey', 'sunny', 'funny' ] , it will split the string into an array of substrings based on the separator "! ".

let str12 = " hello ji ";
console.log(str12.length); // 10 , it will count the number of characters in the string including the spaces. so it will count the leading and trailing spaces also.
console.log(str12.trim().length); // 6 //  str.trim() will remove the leading and trailing spaces from the string.
// also we have str.trimStart() and str.trimEnd() to remove leading and trailing spaces respectively.

// New way to create string //  new String("")
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring); // [String: 'Hello Coder Army'] , it will create a string object and return it. So it will not return a primitive string but a string object.
console.log(typeof lasteststring); // object , since it is a string object and not a primitive string. so its type is object.
// so iska benefit iss ...
// normal string is of primitive type which is stored in stack and thus its immutable and thus we cannot update it.
// but using the new String() we can create a string object which is stored in heap and thus it is mutable and thus we can update it. 

lasteststring = "new string"; // we can update the string since it is mutable. so it will update the string object to "new string".

lasteststring[0] = "h"; // we can update the string object since it is mutable. so it will update the first character of the string object to "h".
console.log(lasteststring); // [String: 'Hello Coder Army'] , it will not update the string object since it is a string object and not a primitive string. so it will not update the string object and will return the original string object only.


// so it gives us the flexibility to update the string. 
// but it is not recommended to use this way to create string since it is not efficient and it is not necessary to create a string object to update the string. 
// we can simply use the normal string and update it using string methods like replace, slice, etc. so it is better to use normal string instead of string object.





// summary -----------------------------------------
str[index] → Access character using index
str.charAt(index) → Access character using method

Case conversion
str.toLowerCase() → Convert to lowercase
str.toUpperCase() → Convert to uppercase

Search in string
str.indexOf("substring") → Index of first occurrence, returns -1 if not found
str.lastIndexOf("substring") → Index of last occurrence
str.includes("substring") → Returns true/false if substring exists

Extract part of string
str.slice(start, end) → Extract part (end not included), supports negative index
str.substring(start, end) → Extract part (negative index treated as 0)
str.substr(start, length) → Extract characters based on length

Replace text
str.replace("old", "new") → Replace first occurrence
str.replaceAll("old", "new") → Replace all occurrences

Convert string to array
str.split("separator") → Split string into array

Remove spaces
str.trim() → Remove leading & trailing spaces
str.trimStart() → Remove leading spaces
str.trimEnd() → Remove trailing spaces

Create string object
new String("text") → Creates string object (type = object)