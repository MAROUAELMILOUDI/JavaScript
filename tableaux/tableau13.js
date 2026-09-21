const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre d'éléments: "))
let tableau1 = []
let tableau2 = []

for(i=0; i<n; i++){
        let element = Number(prompt(`Entrer l'élément n°${i+1}: `))
        tableau1.push(element)
}
console.log(tableau1)

for(i=0; i<n; i++){
    if(tableau1[i] % 2 !== 0){
        tableau2.push(tableau1[i])
    }    
}


console.log(tableau2)
