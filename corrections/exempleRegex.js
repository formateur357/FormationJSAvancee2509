// str contenant des adresses email
let text = " Voici quelques exemples : john.mckinley@live.fr, janeDupont@hotmail.fr, invalideemail.fr";

let pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,7}\b/g;

// Recherche de toutes les adresses email valides dans la str

let matches = text.match(pattern);

if (matches) {
    matches.forEach((matche) => {
        console.log(matche);
    });
} else {
    console.log("Aucune adresse email trouvee.");
}

// recherche de motif simple

let text2 = "Ceci est un exemple de texte.";
var pattern2 = /exemple/;
var match = text2.match(pattern2);

// Recherche des lignes contenant une serie de ; et les effacer

let strList = [
    ";;;;;;;;abcabcabc",
    "abcabc;abc",
    "abca;bcabc",
    ";abc",
    ";;abc",
    "abc",
    ";;;abc",
    "a;bc",
    ";abc",
    ";;;;;;;;;;;;;;;;;;;abc",
]

let trimPattern = /^;+/;

function replaceSemicolons(match) {
    return match.replace(/;/g, '');
}

// Filtrage et transformation des lignes
let processedLines = strList.map((line) => {
    return line.replace(trimPattern, replaceSemicolons);
});

console.log(processedLines);

let newStr = processedLines.join('\n');

console.log(newStr);

// Remplacement de texte

let text3 = "Les Pommes sont rouges et les poires sont vertes.";
let pattern3 = /rouges|vertes/g;

let newText3 = text3.replace(pattern3, "jaunes");
console.log(newText3);

// utilisation de groupes de capture

let str = "Nom: John, Age: 30, Nom: Jane, Age: 25";
let pattern4 = /Nom: (\w+), Age: (\d+)/g

let matches2 = [];
let match3;

while((match3 = pattern4.exec(str)) !== null) {
    matches2.push(`Nom: ${match3[1]}, Age: ${match3[2]}`);
}

console.log(matches2);

// 