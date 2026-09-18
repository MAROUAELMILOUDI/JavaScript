const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer un nombre: "))
let somme=0
for(let i=0; i<=n; i++){
    somme+=i
}
console.log(`somme est: ${somme}`)