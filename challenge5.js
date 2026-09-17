const prompt = require('prompt-sync')()
let C = parseInt(prompt("Entrer la température en Celsius: "));
if(C < 0){
    console.log(`l'etat de l'eau est solide.`);
}else if(0 <= C < 100){
    console.log(`L'etat de l'eau est liqued.`);
}else if(C >= 100){
    console.log(`L'etat de l'eau est gaz.`);
}else{
    console.log(`Echec.`);
}
