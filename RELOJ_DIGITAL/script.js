// Captura contenido del elementos html
const reloj = document.getElementById ('reloj')
let modoNocturno = document.getElementById('nocturno')
let modoDiurno = document.getElementById('diurno')

reloj.textContent = localStorage.getItem('ultimaHora') || "00:00:00";

function actualizarReloj (){
    // Crea objeto de fecha, para obtener la hora actual:

    const ahora = new Date();

    // Obtener la hora, los minutos y los segundos

    const horas  = ahora.getHours().toString().padStart(2,'0');
    const minutos = ahora.getMinutes().toString().padStart(2,'0')
    const segundos = ahora.getSeconds().toString().padStart(2,'0')

    // Combinar valores en formato HH:MM:SS
    const horaActual=`${horas}:${minutos}:${segundos}`

    // Actualizar contenido en el div del html
    reloj.textContent = horaActual;

    // Guarda la hora actual en localStorage
    localStorage.setItem('ultimaHora', horaActual);
}

//Llamar funcion:

setInterval(actualizarReloj,1000);


// Evento y funcion para el modo nocturno

modoNocturno.addEventListener("click", function(){
    document.body.classList.add("modo-oscuro");
    reloj.classList.add("modo-oscuro");
    document.body.classList.remove("modo-claro");
    reloj.classList.remove("modo-claro");
    localStorage.setItem("modo", "oscuro");
});

// Evento y funcion para el modo diurno

modoDiurno.addEventListener("click", function(){
    document.body.classList.add("modo-claro");
    reloj.classList.add("modo-claro");
    document.body.classList.remove("modo-oscuro");
    reloj.classList.remove("modo-oscuro");
    localStorage.setItem("modo", "diurno");
});