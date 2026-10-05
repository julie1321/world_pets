const carousel = document.getElementById('carousel');
const cajas = document.querySelectorAll('.caja');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots-container');

const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/219/5000/3333',
    'https://picsum.photos/id/593/1774/2365',
    'https://picsum.photos/id/659/2731/1536',
    'https://picsum.photos/id/837/5000/3333',
    'https://picsum.photos/id/1025/4951/3301'
];

let currentIndex = 0;
let startX = 0;
let isDragging = false;


// Creamos una imagen dentro de cada caja
cajas.forEach((caja) => {

    const img = document.createElement('img');

    img.alt = 'Carousel image';
    img.draggable = false;

    caja.appendChild(img);
});


// Creamos un punto por cada imagen
images.forEach(() => {

    const dot = document.createElement('div');

    dot.classList.add('dot', 'inactive');

    dotsContainer.appendChild(dot);
});


// Seleccionamos los puntos después de crearlos
const dots = document.querySelectorAll('.dot');


// Función para actualizar el carrusel
function updateCarousel() {

    const prevIndex =
        (currentIndex - 1 + images.length) % images.length;

    const nextIndex =
        (currentIndex + 1) % images.length;


    // Actualizamos las tres cajas
    cajas.forEach((caja, index) => {

        const img = caja.querySelector('img');

        if (index === 0) {

            // Imagen anterior
            img.src = images[prevIndex];

        } else if (index === 1) {

            // Imagen actual
            img.src = images[currentIndex];

        } else if (index === 2) {

            // Imagen siguiente
            img.src = images[nextIndex];
        }
    });


    // Actualizamos los puntos
    dots.forEach((dot, index) => {

        if (index === currentIndex) {

            dot.classList.add('active');
            dot.classList.remove('inactive');

        } else {

            dot.classList.remove('active');
            dot.classList.add('inactive');
        }
    });
}


// Botón anterior
prevBtn.addEventListener('click', () => {

    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    updateCarousel();
});


// Botón siguiente
nextBtn.addEventListener('click', () => {

    currentIndex =
        (currentIndex + 1) % images.length;

    updateCarousel();
});


// Permitir cambiar de imagen haciendo clic en los puntos
dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

        currentIndex = index;

        updateCarousel();
    });
});



// Arrastrar raton


carousel.addEventListener('mousedown', (e) => {

    isDragging = true;

    startX = e.pageX;
});


carousel.addEventListener('mousemove', (e) => {


// Si no estamos arrastrando, no hacemos nada
    if (!isDragging) {
        return;
    }

    const moveX = e.pageX - startX;


 // Si el movimiento supera los 100px
    if (Math.abs(moveX) > 100) {

        if (moveX > 0) {


     // Arrastrar hacia la derecha
     // muestra la imagen anterior
            currentIndex =
                (currentIndex - 1 + images.length) % images.length;

        } else {

      // Arrastrar hacia la izquierda
      // muestra la imagen siguiente
            currentIndex =
                (currentIndex + 1) % images.length;
        }


        updateCarousel();

        // Terminamos el arrastre
        isDragging = false;
    }
});


// Cuando soltamos el botón del ratón
carousel.addEventListener('mouseup', () => {

    isDragging = false;
});


// Si el ratón sale del carrusel
carousel.addEventListener('mouseleave', () => {

    isDragging = false;
});


// Inicializamos el carrusel
updateCarousel();