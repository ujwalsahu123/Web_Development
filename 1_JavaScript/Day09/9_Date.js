
// Date and Time in JavaScript
// using Date() we can create a date object which contains the current date and time. we can also create a date object by passing the date and time as a parameter to the Date() constructor.
const d = new Date();

console.log(d); // 26-2024-T12:00:00:... //it will print the current date and time 

console.log(typeof d); // object hai

console.log(d.toString()); // Wed Jun 26 2024 12:00:00 GMT+0530 (India Standard Time) 

console.log(d.toDateString()); // Wed Jun 26 2024 

console.log(d.toTimeString()); // 12:00:00 GMT+0530 (India Standard Time)

console.log(d.toLocaleString()); // 6/26/2024, 12:00:00 PM  // it will print the date and time in the format of 6/26/2024, 12:00:00 PM

console.log(d.toLocaleDateString()); // it will print the date in the format of 6/26/2024

console.log(d.toLocaleTimeString()); // it will print the time in the format of 12:00:00 PM

console.log(d.toISOString()); // it will print the date and time in the format of 2024-06-26T06:30:00.000Z


// so date is stored in millisec from 1 Jan 1970, .. and using that millie sec we calculate the data and time. (meaning uss din say aaj tak kitna millie sec hua hai .. using that we calc todays date and time)
// example:
let d1 = new Date(0); // it will create a date object with the date and time of 1 Jan 1970, 00:00:00 GMT
console.log(d1); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) // it will print the date and time of 1 Jan 1970, 00:00:00 GMT in the local time zone
//example:
let d2 = new Date();
console.log(d2.getTime()); // 1719360000000 // it will return the number of milliseconds since 1 Jan 1970, 00:00:00 GMT

// so the smallest we can differentiate between 2 events is in millisecond.
// if personA book ticket at x time and personB book ticket at x+1 millisecond then we can know that personA booked first. 
// but if personA book ticket at x time and personB book ticket at x+10 microsecond then we cannot differentiate, since it will show both booked at x millisecond, since the smallest unit of time in JavaScript is millisecond.


console.log(d.getDate()); // it will return the date of the month (1-31) 

console.log(d.getDay()); // it will return the day of the week (0-6) where 0 is Sunday and 6 is Saturday

console.log(d.getMonth()); // it will return the month (0-11) where 0 is January and 11 is December, so if we want to print the month in the format of Jan/feb/Mar then we can create an array of months and use the index to get the month name.
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
console.log(months[d.getMonth()]); // it will print the month name in the format of Jan/feb/Mar

console.log(d.getFullYear()); // 2024 it will return the year in 4 digit format

console.log(d.getHours()); // it will return the hours (0-23)

console.log(d.getMilliseconds()); // it will return the milliseconds (0-999) of the current second

console.log(d.getMinutes()); // it will return the minutes (0-59)

console.log(d.getTime()); // 1719368675987 // it will return the millie second when the d object. 
const now = Date.now(); // 1719368675987 // it will return the number of milliseconds, same as the above but it give u the real time . and not the time of when the object was created. 


// 0 based -> month, day, hours, minute, second, millisecond
// 1 based -> date




// # Making Date object using custom date and time uisng Date() constructor

// we can also create a date object by passing the date and time as a parameter to the Date() constructor.
const d3 = new Date("2022-10-20"); // it will create a date object with the date and time of 20 Oct 2022, 00:00:00 GMT
console.log(d3.toString()); // Thu Oct 20 2022 05:30:00 GMT+0530 (India Standard Time) 


// Number: 0 based start honge
// String: 1 based start honge
// when we will give the data in "string" then 1 based hoga (ex 10 -> october)
// but when we will give the data in number then 0 based hoga (ex 9 -> october)

let d5 = new Date("2022-10-20"); 
let d4 = new Date(2022,9,20); 

const d = new Date("2022-10-20");
// year / Month / Date / Hour / Minute / second / millisecond
const date = new Date(2024,5,28, 10, 12,45, 231);
console.log(date.toString()); // Fri Jun 28 2024 10:12:45 GMT+0530 (India Standard Time)






// we can also set the date and time of an existing date object using the setDate(), setMonth(), setFullYear(), setHours(), setMinutes(), setSeconds(), setMilliseconds() methods.
// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d.toLocaleString());






//  Date calculation

const date1 = new Date(); // current date
const date2 = new Date("2025-04-21"); // old date

console.log(date2-date1); // output: 14294020000 
// difference between date is in millisecond // since the date are stored in millisecond 






//  Countdown Timer for olympics 2028
// this may (Days , hour, minute , second) are left


const date1 = new Date(); // current system date and time
const date2 = new Date("2028-07-14T00:00:00"); // date of olymips 2028

const date = date2-date1;  // differnce kiya
console.log(date); // 234324324234 // it will return the difference in millisecond


// now using the millisecond we can calculate the number of days, hours, minutes and seconds left for the olympics 2028.

// convert millisec to days.
// 1 day = 24 hours = 24*60 minutes = 24*60*60 seconds = 24*60*60*1000 milliseconds
const days = Math.floor(date/(1000*60*60*24));
// divide milliseconds_left_for_olympics by milliseconds in 1 day
// thus it will give total number of days remaining
// Math.floor is used because division can give decimals
// example → 3.7 days means 3 full days and remaining hours
// floor removes decimal part and keeps only full days



// 1 hour = 60 minutes = 60*60 seconds = 60*60*1000 milliseconds
const hour = Math.floor((date/(1000*60*60))%24);
// first convert 1hr is x millisecond 
// ** then % 24 extracts remaining hours after removing full days . (mod hai naa so mod 24 kia then days nikal gaye and hours bache.) (if we have 3.7 days then it will give us 0.7 days which is 16.8 hours, so it will give us 16 hours remaining after removing full days)
// example
// total hours = 78
// 78 % 24 = 6
// meaning 3 days + 6 hours remaining


// 1 minute = 60 seconds = 60*1000 milliseconds
const minute = Math.floor((date/(1000*60))%60);
// convert milliseconds → total minutes
// % 60 extracts remaining minutes after removing full hours
// example
// total minutes = 154
// 154 % 60 = 34
// meaning 2 hours + 34 minutes


// 1 second = 1000 milliseconds
const second = Math.floor((date/(1000))%60);
// convert milliseconds → total seconds
// % 60 extracts remaining seconds after removing full minutes\
// example
// total seconds = 125
// 125 % 60 = 5
// meaning 2 minutes + 5 seconds


console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);








