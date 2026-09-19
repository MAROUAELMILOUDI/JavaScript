const prompt = require('prompt-sync')()
let primeDeBase = 350;
let age = parseInt(prompt("Quel est votre age du conducteur (en années) ?"));
let type = prompt("Quel est le type de ton voiture  (1:sportive, 2:utilitaire, 3:familiale) ?");
let nombredaccident = parseInt(prompt("Quel est le nombre ombre d'accidents au cours des 5 dernières années ?"));
if(age<25){
    primeDeBase*1.5
} else if(age>65){
    primeDeBase*1.2
}
if(type===1){
    primeDeBase*2
}else if(type===2){
    primeDeBase*1.2
}else if(type===3){
    primeDeBase*1.1
}
if(nombredaccident>1){
    primeDeBase*=1.3
}
console.log(` la prime d'assurance sera :${primeDeBase}`);