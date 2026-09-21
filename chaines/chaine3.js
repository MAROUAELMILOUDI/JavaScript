const prompt = require('prompt-sync')()
let texte1 = prompt("Entrer un texte ou une phrase: ")
let texte2 = prompt("Entrer un texte ou une phrase: ")
let texte3=texte1 +" "+ texte2
console.log(`${texte3}`)