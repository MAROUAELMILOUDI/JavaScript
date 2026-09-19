const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre des éléments: "))
let facteur = Number(prompt(`Entrer le facteur: `))
let list1 = []
let list2 = []
for(i=0; i<n; i++){
    let elements = Number(prompt(`Entrer l'élément n°${i+1}: `))
    list1.push(elements)
}
console.log(list1)
console.log(`Multiplications de facteur est: `)
for (let i=0;i<n;i++){
    let multiplication = list1[i]*facteur
    list2.push(multiplication)
}
console.log(list2)
