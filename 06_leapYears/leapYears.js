const leapYears = function(year) {

    // 1900 DIVIDE 4 = 475
    // 475 mod 400 != 0 
    // 1600 % 4 = 0 && (year / 4) 
    
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



console.log(leapYears(1900))
console.log(leapYears(1600));