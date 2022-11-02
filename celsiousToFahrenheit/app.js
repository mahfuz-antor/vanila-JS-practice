// Celsius to Fahrenheit Calculator

// Getting Celsius To Fahrenheit Result

const celsiusToFahrenheit = (celNumber) => {
  const calculateCel = (celNumber * 9) / 5 + 32;
  const result = calculateCel;
  console.log(result);
};

celsiusToFahrenheit(37);

// Getting Fahrenheit to Celsius Result

const fahrenheitToCelsius = (fahrenNumber) => {
  const calculateFahren = ((fahrenNumber - 32) * 5) / 9;
  const result = calculateFahren.toFixed(4);
  console.log(result);
};
fahrenheitToCelsius(0);
