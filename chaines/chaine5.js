const prompt = require('prompt-sync')()
let texte = prompt("Entrer un texte ou une phrase: ")
let str=""
for(let i=texte.length-1; i>=0; i--){
    str+=texte[i]
}
console.log(str)