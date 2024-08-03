// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function strMani(str) {
    if( str.length <= 1) {
        return str;
    }
    st = str.substring(1, str.length - 1);
    return  str[str.length - 1] + st + str[0];
}

console.log(strMani('tushar'));