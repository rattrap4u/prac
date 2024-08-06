// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function check( str ) {
    if ( str.length < 4) {
        return false;
    }
    let start = str.toLowerCase().substring(0,4);

    if (start === 'java') {
        return true;
    } else {
        return false;
    }
}

console.log(check('Javascript'));

