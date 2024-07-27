// Write a JavaScript exercise to create a variable using a user-defined name.

// This JavaScript exercise involves creating a variable with a name provided by the user dynamically during runtime.


let str = "abc";

let n = 120;

this[str] = n;

console.log(this[str]);


// Write a JavaScript exercise to get the filename extension.

let file = "expo.java"

console.log(file.split('.').pop());

// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function diff(num) {
    if(num<=13) {
        return Math.abs(13-num);
    } else 
    return Math.abs((num-13)*2);
}
console.log(diff(20));
console.log(diff(27));
