// Capturar contenido de los elementos html
let contador = document.getElementById("contador");
let disminuir = document.getElementById("disminuir");
let aumentar = document.getElementById("aumentar");
let diurno = document.getElementById("diurno");
let nocturno = document.getElementById("nocturno");

// iniciar el valor del contador en 0
// Cargar el valor guardado del contador o iniciar en 0 si no hay un valor guardado
let valorContador = parseInt(localStorage.getItem("contador")) || 0;
contador.innerHTML = valorContador; // Mostrar el valor cargado

// funcion para aumentar el contador
function aumentarContador() {
  valorContador += 1; // aumentamos el valor en 1

  // actualizar contenido del contador en el DOM
  contador.innerHTML = valorContador; // Actualizamos el contenido en el DOM
  localStorage.setItem("contador", valorContador); // Guardamos el valor en localStorage
}

aumentar.addEventListener("click", aumentarContador);

// funcion para disminuir el contador

function disminuirContador() {
  valorContador -= 1;

  contador.innerHTML = valorContador; // Actualizamos el contenido en el DOM

  localStorage.setItem("contador", valorContador); // Guardamos el valor en localStorage
}

// Evento para disminuir contador

disminuir.addEventListener("click", disminuirContador);

// Evento y funcion para el modo nocturno
nocturno.addEventListener("click", function () {
  document.body.classList.add("modo-oscuro");
  document.body.classList.remove("modo-claro");
  localStorage.setItem("modo", "oscuro");
});

// Evento y funcion para el modo diurno
diurno.addEventListener("click", function () {
  document.body.classList.add("modo-claro");
  document.body.classList.remove("modo-oscuro");
  localStorage.setItem("modo", "claro");
});

// Verifica la preferencia guardada y aplica la clase al cargar la página con localStorage

window.addEventListener("load", function () {
  const modoActual = localStorage.getItem("modo");
  if (modoActual === "oscuro") {
    document.body.classList.add("modo-oscuro");
  } else if (modoActual === "claro") {
    document.body.classList.add("modo-claro");
  }
});
