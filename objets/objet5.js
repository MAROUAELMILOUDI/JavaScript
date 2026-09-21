function creerLivre(titre, auteur, annee) {
    return {
        titre: titre,
        auteur: auteur,
        annee: annee
    };
}


let livre = creerLivre("La boite à merveille", "Ahmed Essafrioui", 1954);


console.log("Titre :", livre.titre);
console.log("Auteur :", livre.auteur);
console.log("Année :", livre.annee);