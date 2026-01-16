// Primitive data type vs Non Primitive data type

// Primitive data type: Immutable , pass by value
// Non Primitive data type: Mutable , pass by reference


// 1. Primitive Types (Immutable):
// Primitive types in JavaScript are immutable, meaning their values cannot be changed once they are created.
// and If you assign a new value to a primitive variable, you’re essentially creating a new copy, and the old value is discarded.

let a = 10;  
let b = a;  // b is a copy of a ( pass by value hua )
b = 20;  // Changing b does not affect a
console.log(a);  // Output: 10

let string1 = "Hello";
let string2 = string1;  // string2 is a copy of string1 ( pass by value hua )
string2 = "World";  // Changing string2 does not affect string1
console.log(string1);  // Output: "Hello"

let name = "Alice";
name[0] = "B"; //here we are tring to update the value in original place , but since its immutable , thus hooga he nahi change . 
console.log(name); // "Alice"
// agar pura update karte too ho jata (since old delted and new created) ,but here you try to update and immutable - cannoted be changed , thus change nahi hua . 
// and old value remains unchanged.


// 2. Non-Primitive Types (Mutable):
// Non-primitive types (also known as reference types) are mutable, meaning you can change the values after it is created. 
// When you assign an object or array to a new variable, both variables refer to the same memory location.
// and If you change the content of one variable, it will affect the other variable as well, since they both point to the same object in memory.

let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 is a copy of arr1 ( pass by reference hua )
arr2[0] = 10;  // Changing arr2 affects arr1 because they point to the same memory location . and they are mutable so you can change the value in original place.
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
// { id: 30, naming: 'rohit' }
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



// 3 pages ka notes put here . which i made . 


//******************************************************* */













//-----------------------------------------------------------------------

console.log( (0.2 + 0.1) === 0.3)       // false
console.log(0.2 + 0.1)         // 0.30000000000000004

// In JavaScript, numbers are stored as binary floating-point numbers (64-bit, based on IEEE 754). and in this Format we can’t always represent decimal numbers exactly.

// The Issue:
// Some decimal numbers like 0.1 and 0.2 CAN'T be exactly represented in binary.
// if you want to store 0.1 in binary, it becomes an infinite repeating fraction (ex - 1/3 => 0.333....), which can’t be stored exactly in a finite number of bits. so WE TAKE AN APPROXIMATION . ex - 1/3 -> 0.33333... => 0.34. 
// so like that we also take approximation for decimal numbers like 0.1 and 0.2. so 0.1 becomes 0.10000000000000000555111512312
// So, when you add them together (e.g., 0.2 + 0.1), you get a result that's very close to the expected number, but not exact , since we are adding two approximate value .  
// so 0.1000000000000000555111512312 + 0.20000000000000001110223024625 = 0.30000000000000004440892098500626, which is not exactly equal to 0.3.


