const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre des éléments: "));
let list = []
for(i=0; i<n; i++){
    let elements = Number(prompt(`Entrer ton élément n°${i+1}: `))
    list.push(elements)
}
let max = list[0]
for(i=0; i<n; i++){
    if(list[i]>max){
        max = list[i]
    }
}
console.log(list)
console.log(max)
