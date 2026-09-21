const prompt = require('prompt-sync')()
let a = Number(prompt("Entrer le nombre d'éléments du premier tableau: "))
let b = Number(prompt("Entrer le nombre d'éléments du deuxieme tableau: "))
let tableau1 = []
let tableau2 = []
for(i=0; i<a; i++){
    let elementa = Number(prompt(`Entrer l'élément n°${i+1}: `))
    tableau1.push(elementa)
}
console.log(tableau1)
for(i=0; i<b; i++){
    let elementb = Number(prompt(`Entrer l'élément n°${i+1}: `))
    tableau2.push(elementb)
}
console.log(tableau2)
tableau1.push(...tableau2)
console.log(tableau1)