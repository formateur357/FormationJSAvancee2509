// Creer un tableau en 2d de 3x3

let tableau2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Acceder a un elt du tableau
console.log(tableau2D[0][0]);

// map afin de creer un nouveau tableau en appliquant une fonction a chaque element du tableau

let nouveauTableau = tableau2D.map((row) => {
    return row.map((elt) => {
        return elt * 2;
    });
});

// filter peut etre utiliser pour filtrer les element s d'un tableau en fonction d'une condition.

let tableauFiltre = tableau2D.filter((row) => row.includes(5));
console.log(`\n${tableauFiltre}\n`);

// methode flat() pour niveler un tableau multidimensionnelle
let tableauFiltre2 = tableau2D.flat().filter((cell) => cell % 2 === 0)
console.log(`\n${tableauFiltre2}\n`);

// forEach afin de modifier les elements du tableaux
nouveauTableau.forEach((row) => {
    row.forEach((elt) => {
        console.log(elt);
    });
});

let somme = tableau2D.reduce((acc, row) => {
    return acc + row.reduce((rowSum, elt) => {
        return rowSum + elt;
    }, 0)
}, 0)

console.log(somme)


// equivalent Select et where

const personnes = [
    { nom : 'Alice', age: 30 },
    { nom : 'Bob', age: 20 },
    { nom : 'John', age: 10 },
    { nom : 'Georges', age: 35 }
];

// equivalent where Filter les ages
const filteredAges = personnes.filter((personne) => personne.age > 25);

// Selectionner seulement les noms des personnes
const nomsDesPersonnes = filteredAges.map(personne => personne.nom);

console.log(nomsDesPersonnes)