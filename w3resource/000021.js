// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.


function addLast3CharAtFirstAndLast( str ) {
    if(str.length <=2) {
        return str;
    }
    // st = str.substring(str.length, str.length - 3);
    // return st + str + st;
    sti = str.chartAt(str.length-3);
    console.log(sti);
    return sti + str + sti;
}

console.log(addLast3CharAtFirstAndLast("123456"));