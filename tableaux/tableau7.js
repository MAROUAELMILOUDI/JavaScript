const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre des éléments: "))
let list = []
for(i=0; i<n; i++){
    let elements = Number(prompt(`Entrer l'element n°${i+1}: `))
    list.push(elements)
}
list.sort((a, b) => a - b)
console.log(list)