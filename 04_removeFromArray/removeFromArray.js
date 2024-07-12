const removeFromArray = function (arr, ...manyMoreArgs) {

    
    for (const arg of manyMoreArgs) {
        const index = arr.indexOf(arg);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }
    return arr
    

};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3, 4], 3));

console.log(removeFromArray([1, 2, 3, 4],3,2));