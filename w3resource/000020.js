// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.


function multipleOf3or7(n) {
    if(n%3 === 0 || n%7 === 0 ) {
        return n +" is a multiple of 3 and 7.";
    } else {
        return n +" is not a multiple of 3 and 7.";
    }

}

console.log(multipleOf3or7(21));
console.log(multipleOf3or7(25));