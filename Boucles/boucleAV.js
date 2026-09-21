const prompt = require('prompt-sync')()
let n = Number(prompt("Entrer le nombre des lignes à composer: "))
let etoile = "*"
for(let i = 0 ; i < n; i++){
  line = ""
  for(let j = 0 ; j < n*2 ; j++){
    if(j >= ((n*2/2)-i) && j <= ((n*2/2)+i)){
      line+="*"
    }
    else{
      line+=" "
    }etoile+="**"
  }
  console.log(line)  
}