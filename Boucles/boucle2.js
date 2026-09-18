const prompt = require('prompt-sync')()
let nombre = parseInt(prompt("Entrer un nombre entier: "));
let factorielle=1;
for(let i=1; i<=nombre; i++){
    factorielle *= i;
}
console.log(`${nombre}! = ${factorielle}`)