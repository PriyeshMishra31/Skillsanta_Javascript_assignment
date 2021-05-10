// Write a JavaScript program function to convert temperatures
// from Celsius, Fahrenheit and Fahrenheit to Celsius as per user
// arguments provide in functions.

function FahrenheittoCelcius(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }
  function CelciustoFahrenheit(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum+32)/1.8;
  }


