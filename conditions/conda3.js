const prompt = require('prompt-sync')()
let joursaccordés = parseInt(prompt("Nombre total de jours de congés accordés: "));
let joursutilisés = parseInt(prompt("Nombre de jours de congés utilisés: "));
let statut = prompt("Statut de l'employé (0:temps partiel, 1:temps plein)");
if(statut===1){
    let joursrestants = joursaccordés - joursutilisés
}else if(statut===0){
    let joursrestants = (joursaccordés/2)-joursutilisés
}
console.log(`Les jours utilisés dépassent les jours accordés sont ${joursrestants}.`);
if(joursutilisés>joursaccordés){
    alert(`Les jours utilisés dépassent les jours accordés.`);
}