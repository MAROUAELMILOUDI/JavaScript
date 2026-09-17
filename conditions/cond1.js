const prompt = require('prompt-sync')()
let nombre = parseInt(prompt("Veuilliez entrer un nombre entier: "));
if(nombre % 2 === 0){
    console.log(`Le nombre ${nombre} est pair.`);
}else{
    console.log(`Le nombre ${nombre} est impair.`);
}