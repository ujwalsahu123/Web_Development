// college my notes : 



// // basic array operations    (script 14)
// // --------------------------------------------------------

// // creating an array
// const friends = [ 'ram', 'sam', 'altman','elon','modi']
// console.log(friends)

// // adding elements to the end of the array 
// // array_name.push(value, value , ....)    / you can add one element or many 
// friends.push('pual');
// console.log(friends)

// // Adding elements from another array
// // let anotherArray = [7, 8, 9];
// // myArray.push(...anotherArray);

// // along with adding elements to the array 
// // it returns the length of the array  when assigned to a variable
// const newLength = friends.push('nova')
// console.log(newLength)

// // adding elements to the start of the array
// friends.unshift('John');
// console.log(friends);

// // same as push , this also gives the length of the array.
// const newLength2 = friends.unshift('Jonny');
// console.log(newLength2);

// // Getting the length of the array
// // let lengthOfArray = myArray.length;

// // remove element from the end of the array 
// friends.pop()
// console.log(friends)

// // collect the last popped element in a variable 
// const poppedElement = friends.pop();
// console.log(poppedElement)

// // removes the first element from the array 
// friends.shift()
// console.log(friends)

// //   push - pop (from the back)  ;  unshift - shift (fromt the front)  

// // returns the index position of the element in an array
// console.log(friends.indexOf('modi'));

// // returns '-1' when the element does not exist in an array
// console.log(friends.indexOf('non_exist'))

// // check if a element exist in a list or not .   
// console.log(friends.includes('modi'));
// //returns 'true' or 'false' (boolean) on the existance of the element 

// // adding integer to the array
// friends.push(23)
// // checking if that number exists
// console.log(friends.includes('23'))  // false , since we are here checking a string and not a integer

// // problem --------------------------------------

// // check if 'micheal','peter','james' , 'john'
// // exists in the list given as ['john','micheal','steven','peter']

// // if they do, say that the name exist
// // if it dosent exist , add the name to the list 

// list = ['john','micheal','steven','peter']
// to_check = ['micheal','peter','james' , 'john'];

// for (let i = 0; i < to_check.length; i++) {

//     let is_there = list.includes(to_check[i]);
    
//     if(is_there == true)
//     {
//         console.log(${to_check[i]} exists);
//     }
//     else{
//         console.log(${to_check[i]} dont exists);
//         list.push(to_check[i]);
//     }
//     console.log(list);
// }

// // another code 

// const friendsArray = ['John','Michael','Steven','Peter'];
// const namePerson = prompt(Enter the name of the person:);

// if (friendsArray.includes(namePerson)) {
//     console.log(${namePerson} exists in the array);
// } else if (!friendsArray.includes(namePerson)) {
//     console.log(${namePerson} exists in the array);
//     ......
// }




// // --------------------------------------------------------

// nuexus code : 




// const arr = [2,35,1,8,9,"rohit",true,8];
// console.log(arr[1]);
// console.log(arr.at(-2));
// // at is latest, negative index le leta hai
// console.log(arr.length);
// // length
// // helpful
// const newarr = structuredClone(arr);
// console.log(newarr==arr);

// push, add element at end

// arr.push(30);
// arr.push(50);
// console.log(arr);

// // pop , pop the last element from array
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// // unshift , add element at start

// arr.unshift(10);
// arr.unshift(30);
// console.log(arr);

// // shift, delete element from start
// // [2,35,1,8,9,"rohit"];
// arr.shift();
// console.log(arr);

// // delete operation
// // [hole,2,35,1,8,9,"rohit"];
// delete arr[0];
// console.log(arr);

// console.log(arr);
// console.log(arr.indexOf(8))
// console.log(arr.lastIndexOf(8));
// console.log(arr.includes(10));

// slice
// console.log(arr);
// let a = arr.slice(2,5);
// console.log(a);
// console.log(arr);

// splice
// console.log(arr);
// let newsplice = arr.splice(2,5);
// console.log(newsplice);
// console.log(arr);
// splice(starting_index,total_element_delete,add value)
// arr.splice(2,0,"money",90);
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join("*"));


// concat
// let arr1 = [2,35];
// let arr2 = [5,12];
// let arr4 = [23,432,1123,31];
// let arr3 = arr1.concat(arr2,arr4);
// console.log(arr3[6]);
// arr1.push(arr4);
// console.log(arr1[2][0]);

// 2d array
let arr = [1,2,3,4,5,6,7,8,9];
let arr2d = [[1,2,3,[23,432,123,[331,123,123]]],[4,5,6],[7,8,9]];
// flat ka use to convert into 1d array
let newarr = arr2d.flat(3);
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(newarr);


let abc = [2,1,4,1];
console.log(Array.isArray(abc));

// let ac = new Array(10);
// console.log(ac.length);

