const prompt = require('prompt-sync')()
let num = Number(prompt("Entrer un nombre: "))
function linéaireSearch(arr, target){
    for(i=0; i<arr.length; i++){
        if(arr[i]===target){
            return 1
            
        }
    }return -1
}
let arr=[100,27,4,20,7]
let index = linéaireSearch(arr, num)

if (index !== -1) {
    console.log(`L'élément est trouvé à l'index ${index}.`)
} else {
    console.log(`L'élément n'est pas trouvé.`)
}