// Capturar contenido de los elementos html
let contador = document.getElementById("contador");
let disminuir = document.getElementById("disminuir");
let aumentar = document.getElementById("aumentar");
let diurno = document.getElementById("diurno");
let nocturno = document.getElementById("nocturno");

// iniciar el valor del contador en 0
let valorContador = 0;

// funcion para aumentar el contador
function aumentarContador (){
    valorContador += 1; // aumentamos el valor en 1

    // actualizar contenido del contador en el DOM
    contador.innerHTML = valorContador;
}

aumentar.addEventListener("click",aumentarContador);

// funcion para disminuir el contador

function disminuirContador (){
    valorContador -= 1;

    return contador.innerHTML = valorContador;
}

// Evento para disminuir contador

disminuir.addEventListener("click", disminuirContador);