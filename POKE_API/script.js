// Buscar datos del pokemon dependiendo de su número o nombre

function buscarPokemon(contenedorNumero){  // Targeta donde se trae o se busca información del pokemon
let inputId = `pokemonInput${contenedorNumero}`; // variable que indica si el pokemon es input 1 o input 2
let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase() // trim eliminar espacios al inicio o al final // toLowerCase() convertirlo todo en minuscula
console.log(inputId)
let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`


fetch (urlApi) // busqueda en el servidor
.then(Response => Response.json())
.then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
.catch(() => mostrarError(contenedorNumero))
}


// Traer información del Pokemón

function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);

    infoDiv.innerHTML = `
    <h2 class="pk-name" >${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src = "${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p class="pk-name2">Número:${datosPokemon.id}</p>
    <p class="pk-name2">Peso:${datosPokemon.weight/10}Kg</p>
    <p class="pk-name2">Altura:${datosPokemon.height/10}m</p>
    `
}

// Error en busqueda de pokemon

function mostrarError(contenedorNumero){
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);
    infoDiv.innerHTML = `
    <p class="pk-ms">Pokémon no encontrado.<br> Intenta con otro nombre u otro número</p>
    `
}

// Mostrar pokemon inicial_por defecto

window.onload = function(){
    document.getElementById("pokemonInput1").value = "26"
    buscarPokemon(1);
    document.getElementById("pokemonInput2").value = "25"
    buscarPokemon(2);
}