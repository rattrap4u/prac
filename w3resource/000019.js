// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.


function appendFirstLast(str) {
    if(str.length ===0) {
        return 'String is empty';
    }
    // st = str.charAt(0);
    // console.log("using charAt"+st)
    // return (st + str + st);
    
    let stri = str.substring(0,1);
    console.log("using substring "+stri)
    return (stri + str + stri)  
    
    
}

console.log(appendFirstLast("tush"));