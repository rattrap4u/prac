// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function abDiff(n) {
    if (n <= 19 ) {
        return (Math.abs(n-19));
    } else {
        return (3*(Math.abs(n-19)));
    }
}

console.log( abDiff(12) );

console.log( abDiff(22) );
