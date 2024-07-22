// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var day = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
if(date<10){
    date="0"+date;
}
if(month<10){
    month="0"+month;
}


console.log("date in dd-mm-yy format :-"+date+"-"+month+"-"+year);
console.log("date in dd/mm/yy format :-"+date+"/"+month+"/"+year);
