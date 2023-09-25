class InterfaceMath {
    somme(a, b) {
        throw new Error('La methode somme doit etre implementee.');
    }

    difference(a, b) {
        throw new Error('La methode difference doit etre implementee.');
    }
}

class Calculateur extends InterfaceMath {
    somme(a, b) {
        return a+b;
    }

    difference(a, b) {
        return a - b;
    }
}