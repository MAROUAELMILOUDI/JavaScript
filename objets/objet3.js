let rectongle = {
    largeur: 2,
    longueur: 4,
}
function calculerAire(rectongle){
    return rectongle.largeur * rectongle.longueur;

}
let resultat = calculerAire(rectongle)
console.log(`L'Aire de votre rectongle est: ${resultat}`)