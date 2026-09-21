const prompt = require('prompt-sync')()
let text = prompt("Entrer la chaine principale: ")
let sous_chaine = prompt("Entrer un sous-chaine: ")
if(text.includes(sous_chaine)){
    console.log(`La sous-chaine est trouver dans la chaine principale.`)
}else{
    console.log(`La sous-chaine n'est pas trouver dans la chaine principale.`)
}