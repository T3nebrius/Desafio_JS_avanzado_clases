class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getImg() {
        return this.img;
    }

    getSonido() {
        return this.sonido;
    }

    setComentarios(nuevosComentarios) {
        this.comentarios = nuevosComentarios;
    }
}

export default Animal;
