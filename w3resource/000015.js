// Write a JavaScript program to check two given integers whether one is positive and another one is negative.


function pos_neg(x,y) {
    if((x<0 && y> 0) || (x>0 && y<0)) {
        return true;
    } else {
        return false;
    }
}

console.log(pos_neg(2,-5));

console.log(pos_neg(2,5));

console.log(pos_neg(-2,5));

