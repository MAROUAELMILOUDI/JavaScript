const prompt = require('prompt-sync')()
let x1 = parseFloat(prompt("Entrer la valeur de x1: "));
let x2 = parseFloat(prompt("Entrer la valeur de x2: "));
let x3 = parseFloat(prompt("Entrer la valeur de x3: "));
let p1 = 2;
let p2 = 3;
let p3 = 5;
let moyenne = x1*p1+x2*p2+x3*p3/p1+p2+p3
console.log(`La moyenne pondérée est ${moyenne}.`);