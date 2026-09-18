const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer un nombre: "));
let nombre=1;
for(let i=1; i<=n; i++){
    console.log(nombre)
    nombre+=2
}