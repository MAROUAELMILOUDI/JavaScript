const prompt = require('prompt-sync')()
let a = parseFloat(prompt("Entrer la valeur de a: "));
let b = parseFloat(prompt("Entrer la valeur de b: "));
let c = parseFloat(prompt("Entrer la valeur de c: "));
let moyennegeo = (a*b*c)**(1/3)
console.log(`La moyenne géometrique est ${moyennegeo}`);