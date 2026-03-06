// how to create object
// const obj = {
//    0:20,
//    1:50,
//    2:70, 
//    name:"rohit", 
//    account_balance:420,
//    gender: "Male",
//    age: 30,
//    "account number": 231230,
//    undefined: 30,
//    null:"mohan",
// }

// console.log(obj["undefined"]);
// console.log(obj["null"]);


// console.log(obj.gender);
// console.log(obj["account_balance"]);
// console.log(obj["account number"]);
// console.log(obj['0']);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj);



// const arr = [20,50,70];
// console.log(arr);

//  second method to create
// const person = new Object();
// console.log(person);

// // property add
// person.name = "Rohit";
// person.age = 80;
// person.gender = "Male";
// console.log(person);
// // delete
// delete person.age;
// console.log(person);
// // Modify or update
// person.name = "Mohit";
// console.log(person);


// third method 

// class People{
//     constructor(na, ag, gen){
//         this.name = na;
//         this.age = ag;
//         this.gender = gen;
//     }
// }



// let per1 = new People("Rohit", 20, "Male");
// let per2 = new People("Mohit", 30, "Female")
// let per3 = new People("Aman", 21, "Male")
// console.log(per1, per2);


let obj = {
    name: "rohit",
    age:30,
    account_balance:420,
    gender:"male"
};

//  keys , values
const arr = Object.values(obj);
// console.log(arr);

// keys; value
const arr2 = Object.entries(obj);
// console.log(arr2);

// assign use case
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj4= {e:5,f:6};


const obj3 = Object.assign({},obj1,obj2,obj4);

// console.log(obj1.a);
const obj5 = {...obj1,...obj2,...obj4};
console.log(obj5);













// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// // shallow copy
// obj2.a=10;
// console.log(obj2, obj1);

// //  deep copy 
// let obj3 = structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3, obj1);


//  Nested object
// const user = {
//     name:"Rohit",
//     balance: 420,
//     address: {
//         pincode: 246149,
//         city: "kotdwar"
//     }
// }

// // console.log(user.address.pincode);
// //  structureclone

// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 321314;
// console.log(user.address.pincode);

//  Destructruing of an object
// let obj = {
//     name: "Rohit",
//     money: 430,
//     balance: 30,
//     age: 20,
//     aadhar: "hfdsiohsai"
// };

// const {name, balance, age} = obj;
// const {name:full_name , balance: amount, age:Umar} = obj;
// const {name, age,...obj1} = obj;
// console.log(obj1);

// const arr = [3,2,1,5,10];
// const [first,second] = arr;
// const [first,second, ,third] = arr;
// const [first,second,...third] = arr;
// console.log(third);



// let obj = {
//         name: "Rohit",
//         age: 20,
//         arr: [90,40,60,80],
//         address: {
//             pincode:246149,
//             city:"Kotdwar",
//             state: "uk"
//         }


// };

// const {address:{pincode, city}} = obj;
// const {arr: [first]} = obj;
// console.log(first);

// let user = {
//     name: "Rohit",
//     amount: 420,
//     greet: function(){
//         console.log("Hello COder Army");
//     },
//     meet: function(){
//         return 20;
//     }
// }

// console.log(user.greet());
// console.log(user.meet());

let obj = {
    name:"Rohit",
    amount:420,
    greet: function(){
        return 10;
    }
}


console.log(obj.toString())
// arr is an object
let arr = [2,3,1,8];
arr.push(10);
















let user1 = {
    name: "Rohit",
    age: 20,
}



let user2 = {
    amount:20,
    money:50
}

user2.__proto__ = user1;

let arr = [10,20,30,40];
console.log(arr.__proto__== Array.prototype)
console.log(arr.__proto__.__proto__== Object.prototype)
console.log(arr.__proto__.__proto__.__proto__== null)
