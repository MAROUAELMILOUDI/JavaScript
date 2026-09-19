const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre des lignes à composer: "))
let etoile = "*"
let etoile_espace = etoile.split(" ");
for(i=0; i<n; i++){
    console.log(etoile)
    etoile+="**"
}
for(i = 0; i < etoile_espace.length; i++){
    etoile_espace[i]+="&nbsp;"
}