const prompt = require('prompt-sync')()
let text = prompt("Entrer un texte ou une phrase: ")
let lettre= prompt("Entrer une lettre du texte: ")
count = 0
for(i=0;i<text.length;i++){
  let j = lettre===text[i]
  if(lettre===text[i]){
    count++
  }
}
console.log(`there's ${count}`)