
// Primitive data type vs Non Primitive data type

// Primitive data type: Immutable , pass by value
// Non Primitive data type: Mutable , pass by reference


// 1. Primitive Types (Immutable):------------------------------------------------------
// Primitive types in JavaScript are immutable, meaning their values cannot be changed in the memory once they are created.
// and If you assign a new value to a primitive variable, you’re essentially creating a new memory location and putting the new value there, and the old memory location is discarded.

let a = 10;  
let b = a;  // b is a copy of a ( pass by value hua )
b = 20;  // Changing b does not affect a
console.log(a);  // Output: 10

let string1 = "Hello";
let string2 = string1;  // string2 is a copy of string1 ( pass by value hua )
string2 = "World";  // Changing string2 does not affect string1
console.log(string1);  // Output: "Hello"

let name = "Alice";
name[0] = "B"; //here we are trying to update the value in original place , but since its immutable , thus hooga he nahi change .  
console.log(name); // "Alice"
// agar pura update karte too ho jata (since old delted and new created) ,but here you try to update and immutable - cannoted be changed , thus change nahi hua . 
// and old value remains unchanged.
// (thats why string values can be reassigned but cannot be updated , since they are immutable)




// 2. Non-Primitive Types (Mutable):---------------------------------------------------------------
// Non-primitive types (also known as reference types) are mutable, meaning you can change the values after it is created. 
// When you assign an object or array to a new variable, both variables refer to the same memory location.
// and If you change the content of one variable, it will affect the other variable as well, since they both point to the same object in memory.

let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 is a copy of arr1 ( pass by reference hua )
arr2[0] = 10;  // Changing arr2 affects arr1 because they point to the same memory location . and those values are mutable since stored in heap so you can change the value in original place.
console.log(arr1);  // Output: [10, 2, 3]



let obj1 = {
    id:20,
    naming: "rohit"
}

let obj2 = obj1;   // pass by reference . 

obj2.id = 30;   //  obj1 ka bhi attribute change hoga.

console.log(obj1);    
console.log(obj2);
// Output:
// { id: 30, naming: 'rohit' }   // update hoo gaya since both point to the same memory location in heap. and those values are mutable since stored in heap so you can change the value in original place.
// { id: 30, naming: 'rohit' }




//   *********  Remember this **********

// primintive dataypes (number, str, bool ,etc) ->  immutable (cannot be changed)  ->  thus when we pass the variable then -> call by value pass hoga - since update to hoga nahi - uss memory position par, soo new memory location par copy karna padega.
// and when we update the value then also -> new memory location par the value will be stored , and old value will be discarded. 

// non-primitive datatypes (array, object) -> mutable (can be changed) -> thus when we pass the variable then -> call by reference pass hoga - since update hoo sakta hai in the same memory position , soo no need to create new memory location for the value.
// so thus refernce jayga of the variable and then if new variable ki value we change then refereced varialbe ki bhi value will change, since both point to the same memory location.
// and when we update the value then also -> same memory location par hee the value will be updated.

//******************************************************* */

// stack - memeory stored in order (one by one) so as you know the seen of stack -> cannot update the value - (since agaay-peechay values bharay hai) and kuch gadbad kiya then agay wale values will be disturbed.
// so all the primitive data types are stored in stack memory. thats why they cannot be updated in the same memory location.

// heap - memory stored in unordered manner (randomly) so as you know the seen of heap -> can update the value - (since agaay-peechay values khali hai) and agar agay peechay values aate hai then it will relocate the value in other place.
// so all the non-primitive data types are stored in heap memory. thats why they can be updated in the same memory location.

// see pdf_notes

//******************************************************* */















// ===========================================================================================

// Let , Const  seen with Non-Primitive datatype -------------------------------



// Let non_primitive -----------

let object1 = {
    id:10,
}
object1.id = 20; // we can easily do this , since we can chainging the attribute value which is in the heap


let object2 = {
    name : "hello",
}
object1 = object2;          
// object1 ka actual value is 789f  and object2 ka actual value is 123f . so here we are updating the reference value. 
// so we can do this since , we have used let . so stack may hee new jagah par banega. 
// so now object1 points to => 123f

// and so if we upadate object1 or object2 then the other one will also get updated since both point to the same memory location in heap.
object1.name = "Elon"
console.log(object2.name);  // Elon





// Const non_primitive ---------------------------

const obj1 = {            // here const ka use karke we are making the object , and not using let.
    id:10,
    balance:200
}

obj1.id = 50;            
// we can do this - since we are changing the attribute value which is in heap . 
// and we are not changeing the actual value (refernce) of the obj1 ->   obj = 34fs5 (mem add) which is in stack.

console.log(obj1); // id: 50 , balance: 200
// so even tho it was const object but we can change the attribute value since its stored in heap.

let obj2 = {
    id:20,
    money:30
};

// both of the objects will be stored in the stack only 
// obj1 => 34fs5
// obj2 => 80x0f2

// now if we re-assign the const object which means we wanna do obj1 => (80xof2) . 

obj1 = obj2;
// // error                           
// // since here are are tying to change the const value.  because we made the object using const, thus we cannot change the reference value of the object which is in stack.

obj2 = obj1; // this is possible since obj2 is let and not const.


//******   IMP  */
// so basically stack may hee store hota hai non primitive also ->    obj = mem add. 
// but agar let hota too voo (obj = mem add) update hojata in stack (at a new place) ,
//  but const hai thus update hoga hee nahi (stack may hee hai but, change nahi hoga since constant hai naa)





// so remember this concept , which can be asked . --------------------------------------

const objA = {
    key : 10
}

objA = objB   // ?  can we do this ?    -> no connot be done since const object hai , and we cannot chagne the value of const.


objA.key = 50 ;     // ? can we do this ?  -> yes can be done since here we are updating the attribute value not the constant object value.


// so even if we made a object using const then also we can update its key value. (which should not happend since we use const) 
// so thus people call this as loophole.
