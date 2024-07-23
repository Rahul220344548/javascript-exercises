const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

const sum = function (arr) {
  const sumOfAllNums = arr.reduce( (total, currentItem) => total + currentItem ,0); 
  return sumOfAllNums;
};

const multiply = function(arr) {
  const multipleOfAllNums = arr.reduce((acc, current) => acc * current);
  return multipleOfAllNums;
};

const power = function(a,b) {
  const power = Math.pow(a, b);
  return power;
};

const factorial = function(n) {

  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

