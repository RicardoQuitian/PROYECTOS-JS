// Seleccionar los elementos del html
const imagenGrande = document.getElementById("imagen-grande");
const miniaturas = Array.from(document.querySelectorAll(".miniatura"));
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

// Indice para seguir la imagen actualmente mostrada
let indiceActual = 0;

// Función para actualizar la imagen principal
function actualizarImagen(index) {
    imagenGrande.src = miniaturas[index].src;
}

// Evento de clic en cada miniatura para cambiar la imagen
miniaturas.forEach((miniatura, index) => {
    miniatura.addEventListener("click", () => {
        indiceActual = index;
        actualizarImagen(indiceActual);
    });
});

// Función para mostrar la imagen anterior
function imagenAnterior() {
    if (indiceActual === 0) {
        indiceActual = miniaturas.length - 1;
    } else {
        indiceActual -= 1;
    }
    actualizarImagen(indiceActual);
}

// Función para mostrar la imagen siguiente
function imagenSiguiente() {
    if (indiceActual === miniaturas.length - 1) {
        indiceActual = 0;
    } else {
        indiceActual += 1;
    }
    actualizarImagen(indiceActual);
}

// Evento para las flechas
flechaIzquierda.addEventListener("click", imagenAnterior);
flechaDerecha.addEventListener("click", imagenSiguiente);