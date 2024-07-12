const leapYears = function(year) {
    
    const isYearDivisibleByHundred = year % 100 == 0;
    const isYearDivisibleByFourHundred = year % 400 == 0;
    const isLeapYear = year % 4 == 0;

    if (isYearDivisibleByHundred) {
        if (isYearDivisibleByFourHundred ) {
            return true;
        } else {
            return false;
        }
    } else {
        if (isLeapYear) {
            return true;
        } else {
            return false;
        }
    }

};

// Do not edit below this line
module.exports = leapYears;



// console.log(leapYears(1900))
// console.log(leapYears(1600));