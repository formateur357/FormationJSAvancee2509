class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

    afficherMessage() {
        console.log('Instance unique creee.');
    }
}

const singleton1 = new Singleton();
singleton1.afficherMessage();

const singleton2 = new Singleton();
singleton2.afficherMessage();

console.log(singleton1 === singleton2)