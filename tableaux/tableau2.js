const prompt = require('prompt-sync')()
let n = Number(prompt(" Entrer le nombre d'éléments: "));
let list = [];
for(i=0; i<n; i++){
    let elements = prompt(`Entrer l'élément n°${i+1}: ` );
    list.push(elements)
}
console.log(`Voici ton tableau: `)
console.log(list)