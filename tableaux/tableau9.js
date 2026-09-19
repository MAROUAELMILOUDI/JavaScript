const prompt = require('prompt-sync')()
const list = [1, 2, 3, 4, 5]
let list2= []
for(let i=1; i<=list.length; i++){
    list2.push(list[list.length-i])
}
console.log(list)
console.log(list2)
