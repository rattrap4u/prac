const str = 'Tushar';

// first method i.e using inbuilt methods
function reversestr(str) {
    return str.split('').reverse().join('');
}

console.log(reversestr(str));
// secodn method i.e using for loop methods
console.log('using for loop');

function rev(str) {
    let strs = ''
    for(let i = str.length-1; i>=0; i--) {
        strs += str[i];
    }
    return strs;
}

console.log(rev(str));

// first method i.e using recursion 
console.log('using for recursion with inbuilt method');

function revstr(str) {
    if(str === '')
    return '';
else
return revstr(str.substr(1))+ str.charAt(0);
}
console.log(revstr(str));

console.log('using ternary operator by replacing if statement');
function reversestr(str) {
    return (str === '') ? '' : reversestr(str.substr(1))+str.charAt(0);
}
console.log(reversestr(str));