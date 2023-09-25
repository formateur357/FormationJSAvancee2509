class Animal {
    constructor(name, color, country) {
        this.name = name;
        this.color = color;
        this.country = country;
    }

    getInformation = () => {
        console.log(this.toString())
    }

    move = (speed) => {
        console.log(`Move at : ${speed}mp/h.`)
    }

    toString() {
        return `Name : ${this.name}\nColor : ${this.color}\nCountry : ${this.country}\n`
    }
}

class Dog extends Animal {
    constructor(type, name, color, country) {
        super(name, color, country);
        this.type = type;
    }

    getInformation = () => {
        console.log(this.toString())
    }

    move = (vitesse) => {
        console.log(`Move at : ${vitesse}mp/h.`)
    }

    getInformationWithType() {
        console.log(`Type : ${this.type}\n${super.toString()}`);
    }
}

class Cat extends Animal {
    constructor(name, color, country, type) {
        super(name, color, country);
        this.type = type;
    }

    getInformation = () => {
        console.log(this.toString())
    }

    move = (vitesse) => {
        console.log(`Move at : ${vitesse}mp/h.`)
    }

    getInformationWithType() {
        console.log(`Type : ${this.type}\n${super.toString()}`);
    }
}

const animal1 = new Animal("Unknow", "Grey", "Djibouti")
const cat1 = new Cat("Felix", "Black", "France", "Staffi");
const dog1 = new Dog("Roger", "White", "France", "European");

animal1.move(15);
animal1.getInformation();
//
cat1.move(10);
cat1.getInformationWithType();