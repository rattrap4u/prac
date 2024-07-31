// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function pairCheck(a,b) {
    if( (a==50 || b==50) || (a + b ==50)) {
        return true;
    } else {
        return false;
    }
}

console.log(pairCheck(20,50));

console.log(pairCheck(20,30));
console.log(pairCheck(20,10));


// using arrow function 

const cPair = (x, y) => ((x==50|| y==50 || x+y==50));
console.log(cPair(20,50));

console.log(cPair(20,30));
console.log(cPair(20,20));
