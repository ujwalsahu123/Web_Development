// how to create object ----------

// let/const object_name = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
//     ...
// }

// key -> string, number, boolean, null, undefined, symbol (javaScript automatically converts keys to strings internally, so even if you use a number or boolean as a key, it will be treated as a string)
// value -> any datatype ("string", number, array, object, function, etc.)


const obj = {
   0:20,
   "1":50,
   name : "rohit",
// name2: mohan,     // wrong because mohan is not written in "string" format , and it is also not a define variable
   "name3": "raju",     // we can write "Key" , it will be same as Key without quotes
   account_balance:420,
   gender: "Male",
   age: 30,
// account number : 231230,  // for multi word key (having spaces) use "account number": 231230,
   "account number": 231230,
   true: true,
   undefined: 30,
   null:"mohan",
}







// Accessing -------------
// Object.key    // only for -> string_key , "string_key" (without spaces and special characters and not starting with number)  , "Number_key" not allowed.
// Object["key"]    // for -> sting_key, "string_key" , "Multi word key with spaces" , Number , "Number" ,  ....


console.log(obj.name); // rohit
console.log(obj["name"]); // rohit

console.log(obj.name3); // raju
console.log(obj["name3"]); // raju

// console.log(obj.0); // wrong because key is number
console.log(obj[0]); // 20 because when we write obj[0] it converts 0 to string "0" and then access the value of key "0"
console.log(obj["0"]); // 20

// console.log(obj.1); // wrong because key is number dosent matter "1"
console.log(obj[1]); // 50
console.log(obj["1"]); // 50


console.log(obj.true); // true
console.log(obj["undefined"]); //30
console.log(obj["null"]); // mohan

// console.log(obj.account balance);  // wrong
// console.log(obj."account balance");  // wrong
console.log(obj["account number"]); // Multi word key can only be accessed by this way

console.log(obj); // Print the entire object








// we can make a array using object :
const array = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
    // etc_properties: ...
}

console.log(array[0]); // 10
console.log(array.length); // 3

// we can also add other properties to the array object
array.push(40); 

// So the actual Array is made using object only, thats why typeof(array) is object.
const arr1 = [20,50,70];
console.log(typeof(arr1)); // object







//  second method to create object is by using the Object constructor :-------
const person = new Object();
console.log(person);
// and then we can add properties to the object.







// Note : we call (key:value) -> PROPERTY of the object.

// so for Further Operations on object like add, delete, modify as per this only:
// object.key  // for keys without spaces and special characters and not starting with number
// object["key"]  // for keys with spaces and special characters and starting with number




// property add:  --------------------

// object.new_key = value;  
// object["new_key"] = value; 

person.name = "Rohit";
person.age = 80;
person[1] = "Mohit";
console.log(person);





// delete property:  --------------------

// delete object.key;  
// delete object["key"]; 

delete person.age;
delete person["gender"];
console.log(person);





// Modify or update: --------------------

// object.key = new_value;  
// object["key"] = new_value;  

person.name = "Mohit";
person["name"] = "Aman";
console.log(person);








// third method: ----------------------

// we can also create a object using a class and then creating instance of that class

// class ClassName{
//     constructor(parameters...value1, value2, value3,...){
//         this.key1 = value1;
//         this.key2 = value2;     // we write this.key so that it does for that particular object only which calls the constructor.
//         this.key3 = any_value;  // we can give paramater value or any other values also.
//         ...
//     }
// }

// let Object1 = new ClassName(arguments...value1, value2, value3,...);
// let Object2 = new ClassName(arguments...value1, value2, value3,...);
// ....

// This is better since we can create multiple objects with the same structure and different values by just creating instance of the class and passing different arguments to the constructor.
// instead of writing the same code again and again for creating multiple objects with the same structure but different values.


class People{
    constructor(user_name, user_age, user_gender){
        this.name = user_name;
        this.age = user_age;
        this.gender = user_gender;
    }
}

let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Mohit", 30, "Female")
let per3 = new People("Aman", 21, "Male")

console.log(per1);
// People { name: 'Rohit', age: 20, gender: 'Male' }












// Object Methods :------------------

let obj = {
    name: "rohit",
    age:30,
    account_balance:420,
    gender:"male"
};


//  Access only keys , values :

// Object.keys(obj) -> it will return an array of keys of the object
const keys = Object.keys(obj);
console.log(keys); // [ 'name', 'age', 'account_balance

// Object.values(obj) -> it will return an array of values of the object
const arr = Object.values(obj);
console.log(arr); // [ 'rohit', 30, 420, 'male' ]

// Object.entries(obj) -> it will return an array of key-value pairs of the object in the form of array of arrays (2d array)
const entries = Object.entries(obj);
console.log(entries); // [ [ 'name', 'rohit' ], [ 'age', 30 ], [ 'account_balance', 420 ], [ 'gender', 'male' ] ]



// Combine Multiple objects into one object :------------------

Object.assign(target_object, source_object1, source_object2, ...)
// it will combine all the source objects into the target object and return the target object with the combined properties of all the source objects. if there are same keys in multiple source objects then the value of that key in the target object will be the value of that key in the last source object.

// it returns the target_object after combining all the source objects into it, so we can also do like this :
new_object = Object.assign(target_object, source_object1, source_object2, ...)
// new_object will be same as target_object after combining.


const obj1 = {a:1,b:2}; // object 1
const obj2 = {c:3,d:4}; // object 2
const obj3= {e:5,f:6}; // object 3

const obj4 = Object.assign(obj1,obj2,obj3);  // it will combine obj1, obj2, obj3 into obj1 and return obj1
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } it will combine obj1, obj2, obj3 into obj4 and return obj4
console.log(obj1); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } obj1 is also changed

// so we do like this to avoid changing the original objects and create a new object with the combined properties of all the objects.
const obj4 = Object.assign({},obj1,obj2,obj3); // it will combine all the objects into one object and return the new object
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// if the goal is the udpate the original object then we can do like this
Object.assign(obj1,obj2,obj3); // it will combine obj2 and obj3 into obj1 and return obj1
console.log(obj1); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } obj1 is changed


// Using spread operator also we can combine multiple objects into one object.
// new_object = {...object1, ...object2, ...object3, ...}

const obj5 = { ...obj1, ...obj2, ...obj3 }; 
console.log(obj5); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// basically spread operator (...object) opens the entire object
// ex: 
// obj1 -> {a:1, b:2}
// ...obj1 -> a:1, b:2

// so when we do {...obj1, ...obj2, ...obj3}  then it makes an object and inside it we open all the properties of obj1, obj2, obj3 . So thus the new object will have all the properties.




// Forzen object :------------------

// Object.freeze(object) -> it will freeze the object and make it immutable , and return the new forzen object.
// so we cannot change the properties of the object ex: add/update/delete new properties to the object.
// frozen_object = Object.freeze(object);
// frozen_object.key = new_value; // it will not change the value of key in frozen_object

const obj1 = {a:1,b:2};
const frozen_obj1 = Object.freeze(obj1);
frozen_obj1.a = 10; // it will not change the value of a in frozen_obj1
console.log(frozen_obj1); // { a: 1, b: 2 } it is not changed
console.log(obj1); // { a: 1, b: 2 } obj1 is also not changed since frozen_obj1 is a new object and not reference.

// Sealed object :------------------

// Object.seal(object) -> it will seal the object and make it non-extensible , and return the new sealed object. so we cannot add new properties to the object but we can update or delete existing properties of the object.
// sealed_object = Object.seal(object);
// sealed_object.new_key = value; // it will not add new_key to sealed_object
// sealed_object.existing_key = new_value; // it will change the value of existing_key in sealed_object

const obj2 = {a:1,b:2};
const sealed_obj2 = Object.seal(obj2);
sealed_obj2.c = 3;
console.log(sealed_obj2); // { a: 1, b: 2 } it is not changed
console.log(obj2); // { a: 1, b: 2 } obj2 is also not changed since sealed_obj2 is a new object and not reference.











// Object using let const -----------------------------

// using let we can store the add/delete/update the properties of object
// and can also reassign the reference of the object to another object in memory
let obj1 = {
    name: "Rohit",
    age: 20,
}
obj1.name = "Mohit"; // allowed
obj1 = new_object; // allowed (since we used let) // now obj1 will point to the new_object in memory


// using const we can store the add/delete/update the properties of object
// but we cannot reassign the reference of the object to another object in memory
const obj2 = {
    name: "Rohit",
    age: 20,
}
obj2.name = "Mohit"; // allowed
obj2 = new_object; // not allowed (since we used const)  



const obj3 = obj1 // this is not creating a new object, this is just creating a reference to the same object in memory
obj3.name = "Aman"; // allowed, and it will also update obj1.name since both obj1 and obj3 are pointing to the same object in memory 
obj3 = new_object; // not allowed since obj3 is a constant and we cannot reassign the reference.



// to create a new object with another object the we use StructuredClone() method which creates a deep copy of the object and returns a new object with same properties.
let obj4 = structuredClone(obj1); 
const obj5 = structuredClone(obj1);  
obj4.name = "Rohit"; // will not change obj1.name
obj5.name = "Mohit"; // will not change obj1.name


// -------------------------------------











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
