// 

// // const seen with - primitive data type

// const num = 10;
// num = 50 ;  // error - cannot change const value  , since we know that const ka value cannot be changed.



// ===========================================================================================


 let object1 = {
    id:10,
}

object1.id = 20;         // we can easily do this , since we can chainging the attribute value which is in the heap

let object2 = {
    name : "hello",
}

object1 = object2;         // object1 ka actual value is 789f  and object2 ka actual value is 123f . so here we are updating the reference value. 
                            // so we can do this since , we have used let . so stack may hee new jagah par banega. 
                            // so now object1 => 123f

console.log(object1);
// ...





// // CONST seen with - Non Primitive datatype

// const obj1 = {            // here const ka use karke we are making the object , and not using let.
//     id:10,
//     balance:200
// }

// obj1.id = 50;            // we can do this - since we are changing the attribute value which is in heap . 
//                            and we are not changeing the actual value (refernce) of the obj1 ->   obj = 34fs5 (mem add) which is in stack.

// console.log(obj1);
// id: 50 , balance: 200




// let obj2 = {
//     id:20,
//     money:30
// };

// both of the objects will be stored in the stack only 
// obj1 => 34fs5
// obj2 => 80x0f2

// now if we assign an object to other , which means we wanna do obj1 => (80xof2) . 

// obj1 = obj2;
// // error                           
// // since here are are tying to change the const value.  since we made the object using const.       

//******   IMP  */
// so basically stack may hee store hota hai non primitive also ->    obj = mem add. 
// but agar let hota too voo (obj = mem add) update hojata in stack (at a new place) ,
//  but const hai thus update hoga hee nahi (stack may hee hai but, change nahi hoga since constant hai naa)




// see the image  and  write it in the notes . 






//***************** */
// so remember this concept , which can be asked . 

const objA = {
    key : 10
}

objA = objB   // ?  can we do this ?    -> no connot be done since const object hai , and we cannot chagne the value of const.


objA.key = 50 ;     // ? can we do this ?  -> yes can be done since here we are updating the attribute value not the constant object value.


// so even if we made a object using const then also we can update its key value. (which should not happend since we use const) 
// so thus people call this as loophole.








//============================================================================================

// string in js
let str1 = "Hello Coder army";
let str2 = 'Mein toh mast hu';
let str3 = `Aur bhaiya kya haal chaal`;

let price = 80;
// 

console.log(`price of the fresh tomato is ${price} , get is asap`);
console.log("price of the fresh tomato is", price , "get it asap");
// console.log(str1, str2, str3);

//  string concatentaion
let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1+s2;
console.log(s3.length);

//  "hello coder army"
console.log('"hello coder army"');
// 'hello coder army'
console.log("'hello coder army'");

// Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.
let message = "Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.";
console.log(message);
// escape character \
let comment = "Rohit Bhaiya bhut bade badmash hai. \\nWo bhut gande insaan hai."
console.log(comment);

let special = "Rohit";
console.log(special[4]);
console.log(special.charAt(3));


// to lowercase
// to uppercase
console.log(special.toLowerCase());
let strtemp = special.toUpperCase();
console.log(strtemp);
console.log(special);

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));
console.log(hero.includes("Coder"));
               //0123456  
let newstring = "HeloDon";
            //  -7-6-5-4-3 -2-1 
console.log(newstring.slice(1,3));
// slice can take negative index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));

let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money"));
console.log(str10.replaceAll("Ji","Money"));

let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! "));

let str12 = " hello ji ";
console.log(str12.length);
console.log(str12.trim().length);


// New way to create string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);