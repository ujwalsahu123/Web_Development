// college notes my : 

//     ***********    functions    college notes i made . 

// simple/regular fucntion
// funtion fun_name () {code}
// easy fucntion call - function_name()
// console.log(function_name) to print the functin code 

// if you call a non returning fucntion then it will return undifined 

// return function 
// you can call inside console.log(function_name())
// or you can also initialize the reuturn value to a var = fucntion_name()

// parameter function 
// fucntion name (parameter)
// fun_call(argument)
// now this can be a simple fucntion (you can directly call it) or a returning function ( call it in console or initialize a var) . 


// *********** types of fuctions 

// regular 

// anonymous functions / function expressions 
// basically we can make a function and then assign that function to a var and then use that var name to call that function . 
// const var = function () {}   ( we dont write funcnion name thats why we call it anonymous func)
// dont do  const var = function fun_name () {}
// but whats the use ?   its the same thing as regular func.   ( is there is different use ,or its just a different way to make a function)

// arrow fucnion 
// same as anonymous fucntion , but here we dont even write the keyword funcion . and we use a arrow 
// const var = (para) => { }
// also there is a single line arrow fuction  // const var = (para) => one line code
// and easy you can call the funcion using var_name() 



// function calling another function




// ---------------------------------------------------------------------------
// nuexus codes


// Function


// function greet(){
//     console.log("Hello Coder Army");
//     console.log("Mein badiya hu");
//     console.log("Aur Kya chal rha hai");
// }

// greet();

// add program

// parameter
// function sum(number1 , number2){
//     console.log(number1+number2)
// };

// // function call: argument
// sum(3,4);
// sum(10,15);


// Multiplication: function

// function multiply(number1 , number2)
// {
//     // console.log(number1*number2);
//     return number1*number2;
// }

// let result = multiply(4,5);

// console.log(result);

// const fun = function(){
//     console.log("Hello Coder Army");
//     console.log("Mein toh badiya hu");
//     return "Money";

//     // console.log("aur kya chal rha");
// }

// console.log(fun());


//  Arrow function
//

// const sum = (number1, number2)=>{
//    return number1+number2;
// }

// const sum = (number1, number2) => number1+number2 ;


// console.log(sum(3,4));

// const cube = number => number*number*number;


// console.log(cube(8));

//  spread operator or rest operator
// let arr = [2,3,4,5];

//  let arr2 = [...arr];

// const sum = function(...number){
//     // for loop sum nikal sakta hu
//    console.log(number);
// }

// sum(2,3,4);
// sum(4,6,1,10,13);
// sum(2,3);


let obj = {
    name: "Rohit",
    age:30,
    amount:420,
}

// const {name , amount} = obj;
// console.log(name,amount);
// Homework pass by value or pass by reference

// function fun({name, amount}){
//    console.log(name , amount);
// }

// fun(obj);

// function love(obj1){
//     console.log(obj1);
// }

// love(obj);


let obj1 = {
    a:1,
    b:2,
}

let obj2 = {
    c:1,
    d:2,
}


obj2 = Object.create(obj1);

// obj2.__proto__ = obj1;
// console.log(obj2.__proto__)









