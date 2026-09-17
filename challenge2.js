const prompt = require('prompt-sync')()
let temCelsius = parseFloat(prompt("Entrer la tempertature en Celsius: "));
let temKelvin = temCelsius + 273.15
console.log(`${temCelsius}°C correspnds à ${temKelvin}°K`);
