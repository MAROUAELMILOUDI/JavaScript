const prompt = require('prompt-sync')()
let vitKmH = parseFloat(prompt("Entrer la vitesse en kilomètre par heure: "));
let vitMS = vitKmH * 0.27778
console.log(`${vitKmH}km/h corresponds à ${vitMS}m/s.`);