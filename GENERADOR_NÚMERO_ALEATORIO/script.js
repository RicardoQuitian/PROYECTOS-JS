// Capturar contenido de los elementos
const button1 = document.getElementById ("button1");
const button2 = document.getElementById ("button2");
const resultado = document.getElementById ("número_aleatorio");
let toggleButtonDark = document.getElementById("toggleModeDark");
let toggleButtonClear = document.getElementById("toggleModeClear");


function generarNumeroAleatorio (){
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
    resultado.textContent = `${numeroAleatorio}` // Muestra el número en la etiqueta <a>
}

//Agregar evento al botón para que ejecute la función:
button1.addEventListener('click',generarNumeroAleatorio);

// función para borrar contenido

function borrarContenido (){
    resultado.textContent ="----------";
}

button2.addEventListener('click',borrarContenido)

// Evento para el botón de modo nocturno
toggleButtonDark.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('day-mode');
    localStorage.setItem('modo', 'oscuro');
});

// Evento para el botón de modo diurno
toggleButtonClear.addEventListener('click', function() {
    document.body.classList.add('day-mode');
    document.body.classList.remove('dark-mode');
    localStorage.setItem('modo', 'diurno');
});

// Verifica la preferencia guardada y aplica la clase al cargar la página
window.addEventListener('load', function() {
    const modoActual = localStorage.getItem('modo');
    if (modoActual === 'oscuro') {
        document.body.classList.add('dark-mode');
    } else if (modoActual === 'diurno') {
        document.body.classList.add('day-mode');
    }
});