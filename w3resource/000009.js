
// days before christmas left

let today = new Date();
console.log(today);

console.log(today.getDate());
console.log(today.getFullYear());


let christ = new Date(today.getFullYear(), 11, 25);
if(today === 11 && today.getDate()>25){
    console.log("today is christmas");
    christ.setFullYear(christ.getFullYear+1);
} else {
    console.log("not");
    console.log((christ - today)/(1000*60*60*24)+"days left for christmas");
}