// college my notes : 

// array can hold multiple values of different data types
const mixedArray = [
  42,                 // number
  "hello",            // string
  true,               // boolean
  null,               // null
  undefined,          // undefined
  { name: "Alice" },  // object
  [1, 2, 3],          // array
  function () {}      // function
];


// // basic array operations 
// // --------------------------------------------------------

// creating an array
const friends = [ 'ram', 'sam', 'altman','elon','modi']
console.log(friends)

// adding elements to the end of the array 
array_name.push(value, value , ....)    // you can add one element or many 
friends.push('pual');
console.log(friends)

// Adding elements from another array
let anotherArray = [7, 8, 9];
myArray.push(anotherArray);

// along with adding elements to the array 
// it returns the length of the array  when assigned to a variable
const newLength = friends.push('nova')
console.log(newLength)

// adding elements to the start of the array
friends.unshift('John');
console.log(friends);

// same as push , this also gives the length of the array.
const newLength2 = friends.unshift('Jonny');
console.log(newLength2);


// Getting the length of the array
let lengthOfArray = myArray.length;

// remove element from the end of the array 
friends.pop()
console.log(friends)

// collect the last popped element in a variable 
const poppedElement = friends.pop();
console.log(poppedElement)

// removes the first element from the array 
friends.shift()
console.log(friends)

//   push - pop (from the back)  ;  unshift - shift (fromt the front)  

// returns the index position of the element in an array
console.log(friends.indexOf('modi'));

// returns '-1' when the element does not exist in an array
console.log(friends.indexOf('non_exist'))

// check if a element exist in a list or not .   
console.log(friends.includes('modi'));
//returns 'true' or 'false' (boolean) on the existance of the element 

// adding integer to the array
friends.push(23)
// checking if that number exists
console.log(friends.includes('23'))  // false , since we are here checking a string and not a integer



// question --------------------------------------

// check if 'micheal','peter','james','john' exists in the list given as ['john','micheal','steven','peter']
// if they do, say that the name exist, if it dosent exist , add the name to the list 

list = ['john','micheal','steven','peter']
to_check = ['micheal','peter','james' , 'john'];

for (let i = 0; i < to_check.length; i++) {

    let is_there = list.includes(to_check[i]);
    
    if(is_there == true)
    {
        console.log(`${to_check[i]} exists`);
    }
    else{
        console.log(`${to_check[i]} dont exists`);
        list.push(to_check[i]);
    }
    console.log(list);
}

// another code 

const friendsArray = ['John','Michael','Steven','Peter'];
const namePerson = prompt("Enter the name of the person:");

if (friendsArray.includes(namePerson)) {
    console.log(`${namePerson} exists in the array`);
} else if (!friendsArray.includes(namePerson)) {
    console.log(`${namePerson} does not exist in the array`);
}





const arr = [2,35,1,8,9,"rohit",true,8];

// access an element from array
console.log(arr[1]);
console.log(arr.at(-2)); // at is latest, negative index le leta hai

console.log(arr.length);
// length


// refernce
let arr2 = arr;  // this is not creating a new array, this is just creating a reference to the same array in memory
console.log(arr==arr2);  // true, since both arr and arr2 are pointing to the same array in memory

// create a new array with the same elements as arr . not reference
const newarr = structuredClone(arr);
console.log(newarr==arr);



// push, add element at end
arr.push(30);
arr.push(50);
console.log(arr);

// // pop , pop the last element from array
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// unshift , add element at start\
arr.unshift(10);
arr.unshift(30);
console.log(arr);

// shift, delete element from start
arr.shift();
console.log(arr);

// delete operation   -> delete at a particular index but it does not change the length of the array, it just makes that index empty.
// creates a hole in the array. since the space is still there but it is empty. (not recommended)
delete arr[0];
console.log(arr);


console.log(arr);

console.log(arr.indexOf(8)); // returns the index of the first occurrence of 8 in the array, which is 3. If 8 is not found, it returns -1.

console.log(arr.lastIndexOf(8)); // returns the index of the last occurrence of 8 in the array, which is 7. If 8 is not found, it returns -1.

console.log(arr.includes(10));  // returns true if 10 is found in the array, otherwise returns false. 



// slice an array , 
// it does not change the original array, it just returns a new array with the sliced elements.
arr.slice(starting_index included, ending_index not included)
let a = arr.slice(2,5);
console.log(a);
console.log(arr);

// splice an array,
// arr.splice(starting_index, total_element_delete, add value)
// so it returns the those elements , and it also deletes them from the original array. so basically it changes the original array, it returns a new array with the deleted elements.
console.log(arr); // [1,2,3,4,5,6,7,8,9]
let newsplice = arr.splice(2,5); // it will delete 5 elements starting from index 2, so it will delete 3,4,5,6,7 and it will return a new array with those deleted elements [3,4,5,6,7]
console.log(newsplice); // [3,4,5,6,7]
console.log(arr); // [1,2,8,9] , since we have deleted 3,4,5,6,7 from the original array, so it will return a new array with those deleted elements and it will change the original array by deleting those elements from it.

// if we want to add some element in the array using splice, we can do that by adding the element after the total_element_delete parameter.
arr.splice(starting_index, total_element_delete, add value, add value,....)
arr.splice(2,0,"money",90); // it will add "money" and 90 at index 2, since we have not deleted any element from the array, so it will return an empty array and it will change the original array by adding those elements at index 2.
console.log(arr); // [1,2,"money",90,8,9] 



// convert array to string
console.log(arr.toString()); // it will convert the array to a string, so it will return "1,2,money,90,8,9"

console.log(arr.join("*")); // it will also convert array to string but we can specify the separator between the elements, so it will return "1*2*money*90*8*9"
console.log(arr.join(" ")); // "1 2 money 90 8 9"
console.log(arr.join(" , ")); // "1 , 2 , money , 90 , 8 , 9"



// concat
// concatinate two or more arrays, it does not change the original array, it just returns a new array with the concatenated elements.
// new_arr = arr1.concat(arr2, arr3,....)
let arr1 = [2,35];
let arr2 = [5,12];
let arr3 = arr1.concat(arr2); // [2,35,5,12]
let arr4 = [23,432,1123,31];


// If we want to push an entire array into another array, we can do that by using push method, but it will push the entire array as a single element, so it will create a nested array. 
arr1.push(arr4); // [ 2,35, [23,432,1123,31] ]

console.log(arr1[2]); // [23,432,1123,31]
console.log(arr1[2][0]); // 23



// 2d array
let arr = [[1,2,3,4],[5,6,7,8,9]];

let arr2d = [[1,2,3,[23,432,123,[331,123,123]]],[4,5,6],[7,8,9]];


// flat ka use to convert into 1d array
// new_arr = arr2d.flat(depth)  // depth is the level of nesting to flatten, if we do not specify the depth, it will flatten only one level of nesting.
// example :

let newarr = arr2d.flat();
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(newarr); // [1,2,3,23,432,123,331,123,123,4,5,6,7,8,9]

let new_arr = [1,2,3,[23,432,123,[331,123,123]],4,5,6,7,8,9]
console.log(new_arr.flat(1)); //  [1,2,3,23,432,123,[331,123,123],4,5,6,7,8,9]
console.log(new_arr.flat(2)); // [1,2,3,23,432,123,331,123,123,4,5,6,7,8,9]
// so if u dont the nested level of the array and u want flat array then set the depth to infinity
console.log(new_arr.flat(Infinity)); // [1,2,3,23,432,123,331,123,123,4,5,6,7,8,9]


// check if a variable is an array or not
let abc = [2,1,4,1];
console.log(Array.isArray(abc));

// other way to create an array is by using the Array constructor 
let ac = new Array(10,20,30,40,50, "rohit", true);
// but there is problem with it . when giving it single value then it will create an array of that length with empty values, so it is not recommended to use it with single value.
let ac2 = new Array(5); // it will create an array of length 5 with empty values [empty x 5]
console.log(ac2.length); // 5
