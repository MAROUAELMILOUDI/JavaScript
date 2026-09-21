const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre d'éléments:  "))
let list = []
let somme = 0;
let moyenne=0
for(i=0; i<n; i++){
    let elements = Number(prompt(`Entrer l'élément n°${i+1}: `))
    list.push(elements)
    somme += elements;
}
moyenne=somme/n
console.log(list)
console.log(`moyenne est: ${moyenne}`)
