
// callback function

// A callback function is a function passed into another function as an argument, which is then executed inside the outer function. This is typically used for handling asynchronous operations or events.

// Use Case: Callbacks are used to handle asynchronous operations, such as network requests or user interactions. They allow you to specify what should happen after a certain task is completed.


function sum(a,b, callback) {
    let add = a+b;
    callback(add);
}

function display(result) {
    console.log("The sum of two number is "+result);
}
sum(5,6,display);

// Use this version if you only need to handle the result within the callback function.
// The main purpose is to perform some action with the result (e.g., logging, updating UI) using the callback.





// or the other way we can do it by using return 



function sum(a,b, callback) {
    let add = a+b;
    callback(add);
    return add;
}

function display(result) {
    console.log("The sum of two number is "+result);
}
sum(5,6,display);



// Use this version if you need to both handle the result within the callback and use the result later in your code.
// It provides more flexibility by allowing you to capture and use the returned value in addition to handling it in the callback.


// by using setTimeout


function greet(name) {
    console.log("Hello "+name)
}

setTimeout(() => {
    greet("Tushar");
}, 2500);


// by using setInterval



function greet(name) {
    console.log("Hello "+name)
}
let count = 0
const interval = setInterval(() => {
console.log("interval start");

    greet("Tushar");
    count++;

    if(count >=3) {
        clearInterval(interval);
        console.log("interval stop");
    }
}, 3000);