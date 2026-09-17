const prompt = require('prompt-sync')()
let a1 = parseFloat(prompt("Entrer la valeur de a1: "));
let a2 = parseFloat(prompt("Entrer la valeur de a1: "));
let b1 = parseFloat(prompt("Entrer la valeur de b1: "));
let b2 = parseFloat(prompt("Entrer la valeur de b2: "));
let c1 = parseFloat(prompt("Entrer la valeur de c1: "));
let c2 = parseFloat(prompt("Entrer la valeur de c2: "));
let distance = [(a2-a1)**2+(b2-b1)**2+(c2-c1)**2]**(1/2)
console.log(`La distance est ${distance}`);