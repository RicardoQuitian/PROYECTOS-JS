// Primero seleccionamos el botón y el campo de texto
const botonAgregar = document.getElementById("agregarTarea");
const inputTarea = document.getElementById("nuevaTarea");
const listaDeTareas = document.getElementById("listaDeTareas");


// Añadimos un event listener para cuando el usuario haga clic en el botón
botonAgregar.addEventListener("click", function() {
  // Obtenemos el valor que el usuario ha escrito en el input
  const tareaTexto = inputTarea.value;
  
  // Verificamos que el campo no esté vacío
  if (tareaTexto === "") {
    alert("Por favor, escribe una tarea");
    return;
  }
  
  // Crear un nuevo elemento 'li' (item de lista)
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = tareaTexto; // Añadir el texto de la tarea
  
  // Crear un botón para eliminar la tarea
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar"; // Texto del botón

  botonEliminar.classList.add('botonEliminar')
  
  // Crear un botón para editar la tarea
  const botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar"; // Texto del botón

  botonEditar.classList.add('botonEditar');
  
  // Añadir un event listener al botón para eliminar la tarea
  botonEliminar.addEventListener("click", function() {
    listaDeTareas.removeChild(nuevaTarea); // Eliminar la tarea de la lista
  });
  
  // Añadir un event listener para marcar como completada al hacer clic en la tarea
  nuevaTarea.addEventListener("click", function() {
    nuevaTarea.classList.toggle("completada"); // Marcar o desmarcar la tarea
  });
  
  // Añadir un event listener al botón para editar la tarea
  botonEditar.addEventListener("click", function() {

    // Crear un campo de entrada para editar la tarea
    const inputEditar = document.createElement("input");
    inputEditar.type = "text";
    inputEditar.value = tareaTexto; // Poner el texto actual de la tarea en el input

    inputEditar.classList.add('inputGuardar')
    
    // Reemplazar el texto de la tarea con el input
    nuevaTarea.textContent = ""; // Limpiar el texto actual
    nuevaTarea.appendChild(inputEditar); // Añadir el input al li
    
    // Crear un botón para guardar los cambios
    const botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar"; // Texto del botón de guardar

    botonGuardar.classList.add('botonGuardar');

    // Añadir un event listener para guardar los cambios
    botonGuardar.addEventListener("click", function() {
      const nuevoTexto = inputEditar.value; // Obtener el nuevo texto
      nuevaTarea.textContent = nuevoTexto; // Actualizar la tarea con el nuevo texto
      
      // Volver a añadir los botones de eliminar y editar
      nuevaTarea.appendChild(botonEliminar);
      nuevaTarea.appendChild(botonEditar);
    });
    
    // Añadir el botón de guardar junto al input
    nuevaTarea.appendChild(botonGuardar);
  });
  
  // Añadir el botón al elemento 'li'
  nuevaTarea.appendChild(botonEliminar);
  nuevaTarea.appendChild(botonEditar);
  
  // Añadimos el nuevo elemento 'li' (con los botones) a la lista de tareas
  listaDeTareas.appendChild(nuevaTarea);
  
  // Limpiamos el campo de texto después de añadir la tarea
  inputTarea.value = "";
});
