// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

function rotation(str) {
    for(let i=0; i<str.length; i++) {
        str = str[str.length-1] + str.substring(0, str.length-1);
        console.log(str)
    }
}
rotation("str");