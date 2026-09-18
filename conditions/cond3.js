const prompt = require('prompt-sync')()
let nombre1 = parseFloat(prompt("Entrer la valeur de nombre1: "));
let nombre2 = parseFloat(prompt("Entrer la valeur de nombre2: "));
if(nombre1 = nombre2){
    let somme = (nombre1 + nombre2) * 3
    console.log(`La somme est ${somme}.`);
}else{
    let somme = nombre1 + nombre2
    console.log(`La somme est ${somme}.`);
}