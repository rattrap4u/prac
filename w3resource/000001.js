// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

var ampm = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12;
hour = hour ? hour : 12



console.log("Today's day is : "+ daylist[day]);
console.log("\n");
console.log("Today's date is : "+hour +ampm+':'+min+"Minutes" +":"+sec+"Seconds");
