function faireQuack(canard) {
    canard.quack();
}

const canard = {
    quack() {
        console.log('Cancane comme un canard.');
    }
};

const chien = {
    aboyer() {
        console.log('Aboie comme un chien.');
    }
};

faireQuack(canard);
faireQuack(chien);

function estNombre(pair) {
    return typeof pair === 'number'
}