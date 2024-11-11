// Seleccionar la imagen principal y todas las miniaturas
const imagenGrande = document.getElementById("imagen-grande");
const miniaturas = document.querySelectorAll(".miniatura");

// Función para cambiar la imagen principal
function cambiarImagen(e) {
    const nuevaSrc = e.target.src;
    imagenGrande.src = nuevaSrc;
}

// Agregar el evento de clic a cada miniatura
miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", cambiarImagen);
});