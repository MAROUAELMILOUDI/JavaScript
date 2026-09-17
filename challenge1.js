const prompt = require('prompt-sync')();
let nom = prompt("Entrer ton nom: ");
let prenom = prompt("Entrer ton prenom: ");
let age = prompt("Entrer ton age: ");
let sexe = prompt("Entrer ton sexe: ");
let email = prompt("Entrer ton email: ");
console.log(`Voilà tes informations:
    -Nom: ${nom}
    -Prenom: ${prenom}
    -Age: ${age}
    -Sexe: ${sexe}
    -Email: ${email}
    `);