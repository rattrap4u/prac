// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(Year) {
    if((Year%4===0 && Year%100!==0) || Year%400===0) {
        console.log(Year + " is a leap year");
    }  else {
        console.log(Year + " is not a leap year");
    }
}
leapYear(1996);

//other way by which we can do it 

function LeapY(Year) {
    let isLeap = (Year  % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0;
console.log((isLeap ? Year + " is a leap year" : Year + " is not a leap year"));
}
LeapY(1996);