// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.


function checkRange( x, y ) {
    if(( x>=50 && x<=99) || (y >=50 && y<=99)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkRange(49, 100));
console.log(checkRange(55, 90));
console.log(checkRange(55, 0));
