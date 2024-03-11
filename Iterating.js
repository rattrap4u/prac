const arr = [1,2,3,4,5,6,7,8];

console.log('Iterating using for');

for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

console.log('Iterating using foreach');

arr.forEach((item)=> {
    console.log(item);
})

console.log('Iterating using for..of loop');

for(const item of arr) {
    console.log(item);
}

console.log('Iterating using map method');

arr.map((item) => {
    console.log(item);
})


console.log('Iterating using for...in loop');

for(const index of arr) {
    console.log(arr[index]);
}

console.log('Iterating using while loop');

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
