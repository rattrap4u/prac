



// for(let i = 30; i>0; i--){
//     console.log(i);
// }

let count = 30; // Initial countdown value

function countdown() {
    // console.log(count); // Log the current count
    for(let count=30; count>0;){
        console.log(count);
        count--; // Decrease the count by 1
    }   
}
countdown(); // Start the countdown


// left right angle triangle

for(let i =1 ; i<=5; i++){
    let row =''
    for(let j=1;j<=i;j++){
        row +='*'
    }
    console.log(row)
}
console.log('')
for (let i=5; i>=1;i--) {
let row =''

    for(let j=1;j<=i;j++){
        row +='*'
    }
    console.log(row)
}

console.log("")

for(let i =0; i<5;i++) {
    let row = '';
    let space ='';
    for(let j=5-i; j>1; j--) {
    space+=' '
    }
    for(let j=0; j<=i; j++){
    row+='* '
    }
    console.log(space+row);
}
