// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sum(a,b) {
    if(a !== b ) {
        return a + b;
    } else {
        return (a + b) *3;
    }
}

console.log(sum(2,2));

console.log(sum(2,3));