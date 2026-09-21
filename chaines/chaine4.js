const prompt = require('prompt-sync')()
let texte1 = prompt("Entrer un texte ou une phrase: ")
let texte2 = prompt("Entrer un texte ou une phrase: ")
if(texte1===texte2){
    console.log(`Les deux textes sont égales.`)
}else{
    console.log(`Les deux textes sont différentes.`)
}