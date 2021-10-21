var nombre = Math.floor(Math.random() * 1000);
console.log(nombre);
var i = 0;
do {
    var essai = prompt("Essayez de trouver le nombre aléatoire !");
    essai = parseInt(essai);
    if (essai == nombre) {
        alert(
            "Félicitations! Vous avez trouvez le nombre aléatoire en " + i + " coups"
        );
    } else if (essai > nombre) {
        alert(
            "Réessayer encore une fois! Le nombre que vous cherchez est plus petit "
        );
        i++;
    } else {
        alert(
            "Réessayer encore une fois! Le nombre que vous cherchez est plus grand "
        );
        i++;
    }
} while (essai !== nombre);
