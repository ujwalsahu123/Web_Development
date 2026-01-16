
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// so mostly we will use "const" and "let"

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// console.log is used to print the values in a single line format
console.log(accountId);

// to print a string we can use single quotes, double quotes
console.log("hello world");
console.log('hello world');

// and to print multiple Things we can use comma , 
console.log('Account ID:', accountId);
console.log("Account Email:", accountEmail);
console.log(accountEmail, accountPassword, accountCity);

// Backticks `` are to make template literal string ,
//Template literals are like normal strings, but with extra powers:

// 1 Variable interpolation using ${variableName} , inside the backticks // so we can access variables inside the strings directly/
console.log(`Account ID: ${accountId}`);

// 2 Multiline string support
console.log(`This is line 1
    This is line 2`);


// and this (template literal sting using backtick) is like a string only so we can use comma . and print it with different things.
// ex : 
let name1 = "Ujwal";
console.log("Hello", name1, `welcome ${name1} to JavaScript!`);

// ex : 
console.log("list of information about the account",`
    Account ID: ${accountId}
    Email: ${accountEmail}
    Password: ${accountPassword}
    City: ${accountCity}
`);                                  
/// so jaisa ka taise print ho jayega. on next line 
// output : --
// list of information about the account
//     Account ID: 144553
//     Email: hc@hc.com
//     Password: 21212121
//     City: Bengaluru


// console.table is used to print the values in a table format.   here we can pass an array [,,,] or an object
console.table([accountId, accountEmail, accountPassword, accountCity])




// we can define , declare , (define declare both) multiple variables in a single line

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let a = 1 , b = 2, c = 3

console.log(num1, num2, num3); 
