// Capturar contenido de un elemento
let input1 = document.getElementById("input1");
let button1 = document.getElementById("button1")
let cita = document.getElementById("cita");

let citas = ["Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento","El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar","No hay que ir para atrás ni para darse impulso","Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien","La vida es un 10% lo que te sucede y un 90% de cómo reaccionas a ello","Vive como si fueras a morir mañana; aprende como si fueras a vivir siempre","Aléjate de la gente que trata de empequeñecer tus ambiciones. La gente pequeña siempre hace eso, pero la gente realmente grande, te hace sentir que tú también puedes ser grande","Cuando haces feliz a otras personas, recibes más felicidad a cambio. Deberías meditar bien sobre cuánta felicidad eres capaz de dar","Cambia tus pensamientos y cambiarás tu mundo","Solo al arriesgarnos podemos hacer que nuestras vidas mejoren. El principal riesgo y el más difícil de asumir es ser honestos","El éxito no es definitivo; el fracaso no es fatal. Lo que realmente cuenta es tener valor para continuar","Es mejor fallar en la originalidad que triunfar en la imitación","El camino hacia el éxito y el camino hacia el fracaso son prácticamente el mismo","El éxito suele llegar a quienes están demasiado ocupados para buscarlo","Desarrolla el éxito a partir de los fracasos. El desaliento y el fracaso son los peldaños hacia el éxito","Hay tres caminos hacia el éxito definitivo. El primero es ser amable. El segundo es ser amable. El tercero es ser amable","El éxito es la paz interior que resulta directamente de la autosatisfacción de saber que has hecho el esfuerzo de convertirte en lo mejor que eras capaz de ser","Nunca he soñado con el éxito. He trabajado por él","El éxito es obtener lo que quieres; la felicidad es querer lo que obtienes","El pesimista ve la dificultad en cada oportunidad. El optimista ve la oportunidad en cada dificultad","No dejes que el ayer ocupe mucho espacio de tu hoy","Se aprende más de los fracasos que de los éxitos. No dejes que esto te detenga. El fracaso te hace más fuerte","Si trabajas en algo que te gusta y te apasiona, no necesitas un empujón. Tu visión será tu impulso","La experiencia es una maestra dura porque primero te hace el examen y luego te da la lección","Fijarse metas es el secreto para un futuro grandioso","Saber cuánto puedes llegar a saber es el primer paso para aprender a vivir", "Fijarse metas es el secreto para un futuro grandioso", "Concentra todos tus pensamientos sobre el trabajo en una mano. Los rayos del sol no queman hasta que hacen foco", "O corres durante el día o el día corre por ti"]


function mostrarCita (array){
    if (array === 0){
        return "no hay citas disponibles."
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    const fraseAleatoria = array[randomIndex];
    return fraseAleatoria;
}

button1.addEventListener('click', function(){
    cita.innerHTML = mostrarCita(citas);
});

/*cita.innerHTML = button1.addEventListener('click',mostrarCita); -- no funciono






/*
button1.addEventListener('click', function(){

    const inputValue = input1.value;
    console.log (inputValue);
});

function mostrarInput (){
    const inputValue = input1.value;
    console.log (inputValue);
    
}

button1.addEventListener('click',mostrarInput)*/