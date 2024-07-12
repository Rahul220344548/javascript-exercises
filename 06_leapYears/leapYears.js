const leapYears = function(year) {
    
    if (year % 100 ==0) {
        if (year % 400 ==0) {
            return true;
        } else {
            return false;
        }
    } else {
        if (year % 4==0) {
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