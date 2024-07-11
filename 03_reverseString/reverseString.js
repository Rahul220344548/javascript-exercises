const reverseString = function (word) {
    
    // Strings in JavaScript cannot be reversed directly so you're going to have
    // to split it into something else first..do the reversal 
    // and then join it back together into a string.
    
    // reverse "hello" => "olleh"
    
    let string = "";

    for (let i = word.length-1; i >= 0; i--) {
        let a = word.charAt(i);
        string = string + a;
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;

reverseString("hello");