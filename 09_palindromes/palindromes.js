const palindromes = function (str) {

    let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = newStr.split('').reverse().join('').toLowerCase();
    if (newStr == reversed) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
