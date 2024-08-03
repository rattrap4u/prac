// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.


function removeChar( str, place ) {
    st = str.split('');
    st.splice(place, 1);
    return st.join('');
}

console.log(removeChar("Javascript", 3))

