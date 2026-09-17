const prompt = require('prompt-sync')()
let desKm = parseFloat(prompt("Entrer la distance en kilomètres: "));
let desYards = desKm * 1093.61
console.log(`${desKm}Km corresponds à ${desYards}Yards.`);
