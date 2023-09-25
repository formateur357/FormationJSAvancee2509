const symbole = Symbol('propriete_privee');
const obj = {};

obj[symbole] = 'Ceci est une propriete privee';

console.log(obj[symbole]);

let person = {
    name: "morgan",
    age: 9,
    foo: {
        lastname: "guy",
        skills: [
            "peindre",
            "coder"
        ]
    }
}

// formatage de string en js
let var1 = 34
// if (perso.foo.skills)
//     print(`Bonjour ${var1}`)
// else if () {

// }
// else {

// }

