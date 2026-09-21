const prompt = require('prompt-sync')()
let text = prompt("Entrer un texte ou une phrase: ")
let result =text.replace(/\s+/g,"")
console.log(result)