
let num = Math.random()*10;
console.log(num);
num = Math.floor(num)
console.log(num);
let inNum = prompt("Guess the number between 1 to 10");

console.log(inNum === num ? "Matched" : "Not Matched");
