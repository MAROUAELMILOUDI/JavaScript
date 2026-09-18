const prompt = require('prompt-sync')();
let base = Number(prompt("La base: "));
let exposant = Number(prompt("Le exposant: "));

let result = 1;
for (let i = 0; i < exposant; i++)
{
    result *= base;
}
console.log(`${result}`);