
// Given an integer, n , perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20 , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.


function weird(n) {
    if(n%2!==0) {
        console.log("Weird");
    } else if(n%2==0 && (n>=2 && n<=5)) {
        console.log('Not Weird');
    } else if(n%2==0 && (n>=6 && n<=20)) {
        console.log('Weird');
    } else if(n%2==0 && (n>20)) {
        console.log('Not Weird');
    }
}