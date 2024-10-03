import Animal from './Animal.js';
import Leon from './Animales.js';
import Lobo from './Animales.js';
import Oso from './Animales.js';
import Serpiente from './Animales.js';
import Aguila from './Animales.js';



document.addEventListener("DOMContentLoaded", () => {
    const selectorAnimal = document.getElementById('animal');
    const selectorEdad = document.getElementById('edad');
    const comentarioForm = document.getElementById('comentarios');
    const imagen = document.getElementById('preview');
    const sonido = document.getElementById('animalSonido');
    const botonRegistrar = document.getElementById('btnRegistrar');
    let animalesData = [];

    // Cargar el archivo animales.json
    fetch('animales.json')
        .then(response => response.json())
        .then(data => {
            animalesData = data.animales; // Guardar los datos del JSON
        })
        .catch(error => console.error('Error al cargar animales.json:', error));

    function limpiarFormulario(){
        selectorAnimal.selectedIndex = 0;
        selectorEdad.selectedIndex = 0;
        comentarioForm.value = '';
        imagen.innerHTML = '';
    }

    function crearTarjetaSonido(animalInfoSelected, edadInfoSelected, commentInfoSelected){
        const animalInfo2 = animalesData.find(animal => animal.name === animalInfoSelected);
        const imgTarjeta = document.createElement('img');
        let animalInstance2;
        switch (animalInfoSelected) {
            case 'Leon':
                animalInstance2 = new Leon(animalInfoSelected, edadInfoSelected, animalInfo2.imagen, commentInfoSelected, animalInfo2.sonido);
                crearTarjeta(animalInstance2);
                //crearImg(animalInfo);
                //animalInstance.rugir();
                break;
            case 'Lobo':
                animalInstance2 = new Lobo(animalInfoSelected, edadInfoSelected, animalInfo2.imagen, commentInfoSelected, animalInfo2.sonido);
                crearTarjeta(animalInstance2);
                //crearImg(animalInfo);
                //animalInstance.aullar();
                break;
            case 'Oso':
                animalInstance2 = new Oso(animalInfoSelected, edadInfoSelected, animalInfo2.imagen, commentInfoSelected, animalInfo2.sonido);
                crearTarjeta(animalInstance2);
                //crearImg(animalInfo);
                //animalInstance.grunir();
                break;
            case 'Serpiente':
                animalInstance2 = new Serpiente(animalInfoSelected, edadInfoSelected, animalInfo2.imagen, commentInfoSelected, animalInfo2.sonido);
                crearTarjeta(animalInstance2);
                //crearImg(animalInfo);
                //animalInstance.sisear();
                break;
            case 'Aguila':
                animalInstance2 = new Aguila(animalInfoSelected, edadInfoSelected, animalInfo2.imagen, commentInfoSelected, animalInfo2.sonido);
                crearTarjeta(animalInstance2);
                //crearImg(animalInfo);
                //animalInstance.chillar();
                break;
            default:
                console.error('Animal no reconocido');
        }

        function crearTarjeta(animalInstance2) {
            const contenedorAnimales = document.getElementById('Animales'); // Div padre con id 'Animales'
            const rutaImgTarjeta = 'assets/imgs/' + animalInstance2.img;
            const rutaSonidoTarjeta = 'assets/sounds/' + animalInstance2.sonido;
            console.log(rutaSonidoTarjeta);
            // Crear div tarjeta
            const tarjetaDiv = document.createElement('div');
            tarjetaDiv.classList.add('tarjeta-animal');
            
            // Aplicar la imagen de fondo
            tarjetaDiv.style.backgroundImage = `url(${rutaImgTarjeta})`;
            tarjetaDiv.style.backgroundSize = 'cover';
            tarjetaDiv.style.width = '200px';
            tarjetaDiv.style.height = '200px';
            tarjetaDiv.style.position = 'relative';
            
            // Crear botón de sonido
            const botonSonido = document.createElement('button');
            botonSonido.textContent = 'Sonido';
            botonSonido.style.position = 'absolute';
            botonSonido.style.bottom = '0px';
            botonSonido.style.width = '200px';
            botonSonido.style.left = '0px';

            tarjetaDiv.addEventListener('click', function(){
                const modal = document.getElementById('miModal');
                const modalImg = document.getElementById('modalImg');
                const modalDescripcion = document.getElementById('modalDescripcion');

                modal.style.display = 'block';

                modalImg.src = rutaImgTarjeta;
                modalImg.width = 200;
                modalImg.height = 200;
                modalDescripcion.textContent = `${animalInstance2.edad}`;

            });

            botonSonido.addEventListener('click', function() {
                const sonido = new Audio(rutaSonidoTarjeta);
                sonido.play();
            });
    
            tarjetaDiv.appendChild(botonSonido);
    
            contenedorAnimales.appendChild(tarjetaDiv);
        }

        const cerrarModal = document.getElementsByClassName('cerrar')[0];
        cerrarModal.onclick = function() {
            document.getElementById('miModal').style.display = 'none';
        };

        window.onclick = function(event) {
            const modal = document.getElementById('miModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    botonRegistrar.addEventListener('click', function() {
        const animalInfoSelected = selectorAnimal.value;
        const edadInfoSelected = selectorEdad.value;
        const commentInfoSelected = comentarioForm.value;
        crearTarjetaSonido(animalInfoSelected, edadInfoSelected, commentInfoSelected);
        limpiarFormulario();
    });

    selectorAnimal.addEventListener('change', function() {
        const selectedAnimal = this.value;

        if (selectedAnimal) {
            const animalInfo = animalesData.find(animal => animal.name === selectedAnimal);

            async function crearImg(animalInfo) {
                const img = document.createElement('img');
                const ruta_img = 'assets/imgs/' + animalInfo.imagen;
                img.src = ruta_img;
            
                img.alt = 'Imagen de ' + animalInfo.name;
                img.width = 200;
                img.height = 200;
            
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
            
                const contenedor = document.getElementById('preview');
                
                contenedor.innerHTML = '';
            
                contenedor.appendChild(img);

            }
            
            
            
            if (animalInfo) {
                let animalInstance;
                switch (selectedAnimal) {
                    case 'Leon':
                        animalInstance = new Leon(animalInfo.name, '', animalInfo.imagen, '', animalInfo.sonido);
                        crearImg(animalInfo);
                        //animalInstance.rugir();
                        break;
                    case 'Lobo':
                        animalInstance = new Lobo(animalInfo.name, '', animalInfo.imagen, '', animalInfo.sonido);
                        crearImg(animalInfo);
                        //animalInstance.aullar();
                        break;
                    case 'Oso':
                        animalInstance = new Oso(animalInfo.name, '', animalInfo.imagen, '', animalInfo.sonido);
                        crearImg(animalInfo);
                        //animalInstance.grunir();
                        break;
                    case 'Serpiente':
                        animalInstance = new Serpiente(animalInfo.name, '', animalInfo.imagen, '', animalInfo.sonido);
                        crearImg(animalInfo);
                        //animalInstance.sisear();
                        break;
                    case 'Aguila':
                        animalInstance = new Aguila(animalInfo.name, '', animalInfo.imagen, '', animalInfo.sonido);
                        crearImg(animalInfo);
                        //animalInstance.chillar();
                        break;
                    default:
                        console.error('Animal no reconocido');
                }

                // Mostrar la imagen y el sonido
                imagen.src = animalInfo.imagen;
                //sonido.src = animalInfo.sonido;
            }
        }
    });
});


