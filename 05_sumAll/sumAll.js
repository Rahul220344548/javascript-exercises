const sumAll = function (num1,num2) {
    
    let total = 0;

    if (num1 > num2) {
        for (let i = num2; i <= num1;i++) {
            total = total + i;
        }
        return total;
    } 
    else if (num1<0  || num2 < 0){
        return "ERROR";
    }
    else if (typeof num1 == 'string' || typeof num2 == 'string' ) {
        return "ERROR";
    }
    else if (Array.isArray(num1) || Array.isArray(num2)) {
        return "ERROR";
    }
    else {
        for (let i = num1; i <= num2;i++) {
            total = total + i;
        }
        return total;
    }
    
    

};

// Do not edit below this line
module.exports = sumAll;



console.log(sumAll(10, [90, 1]))