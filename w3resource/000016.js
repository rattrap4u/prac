// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function addPy( str ) {
    if( str.startsWith('Py')) {
        return str;
    } else  {
        return ( str = 'Py' + str)
    }
}

console.log( addPy('Java') );


function add_Py( st ) {
    if( st.includes('Py')) {
        return st;
    } else  {
        return ( st = 'Py' + st)
    }
}

console.log( add_Py('Python') );