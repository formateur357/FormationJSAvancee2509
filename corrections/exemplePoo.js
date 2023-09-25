class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        console.log(`${this.nom} fait un bruit indefini.`)
    }

    bouger = (vitesse) => {
        console.log(`Je bouge a ${vitesse}km/h.`)
    }
}

class Chien extends Animal {
    parler() {
        console.log(`${this.nom} aboie.`)
    }
}

class Chat extends Animal {
    parler() {
        console.log(`${this.nom} miaule.`)
    }
}

const chien1 = new Chien("Rex");
const chat1 = new Chat("Felix");

chat1.parler()
chien1.parler()
chien1.bouger(10)

class Personne {
    constructor(nom, prenom, age) {
        this._nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    get nom() {
        console.log("effet de bord");
        return this._nom;
    }

    set nom(nouveauNom) {
        this._nom = nouveauNom;
    }

    toString() {
        return `Prenom: ${this.prenom}\nNom ${this.nom}\nAge: ${this.age}\n`
    }
}

Personne.prototype.afficherAge = function() {
    console.log(`Age: ${this.age}`)
}

const personne1 = new Personne("Wick", "John", 42);
const personne2 = new Personne("Wand", "John", 43);

// set
personne1.nom = "Dean";

// get
console.log(personne1.nom)

let myArray = [1, 2, 3, 4];

// console.log(myArray.toString());
personne1.afficherAge();
// console.log(`personne2 = ${personne2.nom} : ${personne2.prenom} : ${personne2.age}`);