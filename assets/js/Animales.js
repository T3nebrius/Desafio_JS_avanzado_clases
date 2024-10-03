import Animal from './Animal.js';

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir() {
        console.log("El le�n est� rugiendo: " + this.getSonido());
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar() {
        console.log("El lobo est� aullando: " + this.getSonido());
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    grunir() {
        console.log("El oso est� gru�endo: " + this.getSonido());
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear() {
        console.log("La serpiente est� siseando: " + this.getSonido());
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar() {
        console.log("El �guila est� chillando: " + this.getSonido());
    }
}

export default Animal;