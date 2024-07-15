const convertToCelsius = function (temperature) {
  let newTemperature =  ((temperature - 32) * 5 / 9).toFixed(1);
 
  return parseFloat(newTemperature);
};

const convertToFahrenheit = function (temperature) {
  let newTemperature = (temperature * 9 / 5 + 32).toFixed(1);
  return parseFloat(newTemperature);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
