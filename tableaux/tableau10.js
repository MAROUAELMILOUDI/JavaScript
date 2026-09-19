const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre d'éléments: "))
let list = []
let element_rechercher =Number(prompt("Entrer l'element rechercher: "))
for(i=0; i<n; i++){
    let element = Number(prompt(`Entrer les éléments du tableau n°${i+1}: `))
    list.push(element)
}
const recherche = list.find((element) => element === element_rechercher)
console.log(`L'element que tu as rechercher est: ${recherche}`)
