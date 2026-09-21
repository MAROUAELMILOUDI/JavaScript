const prompt = require('prompt-sync')()
let texte = prompt("Entrer un texte ou une phrase: ")
let count = 0;
for(let caractere of texte){
    count++;
}
console.log(`La longueur de ${texte} est: ${count}`)