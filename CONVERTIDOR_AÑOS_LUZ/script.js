// Elementos HTML
const inputAnios = document.getElementById("input-anios");
const conversion = document.getElementById("conversion");
const convertirBtn = document.getElementById("convertir-btn");
const resultadoTexto = document.getElementById("resultado-texto");

// Función conversión
function convertirAnios() {
    const valor = parseFloat(inputAnios.value);
    if (isNaN(valor) || valor < 0) {
        resultadoTexto.textContent = "Por favor, introduce un número válido.";
        return;
    }

    let resultado;
    if (conversion.value === "a-humano") {
        resultado = Math.round(valor * 7.2); // Redondear al entero más cercano
        resultadoTexto.textContent = `${valor} años luz equivalen a ${resultado} años humanos.`;
    } else if (conversion.value === "a-luz") {
        resultado = Math.round(valor / 7.2); // Redondear al entero más cercano
        resultadoTexto.textContent = `${valor} años humanos equivalen a ${resultado} años luz.`;
    }
}

// Agregar el evento al botón
convertirBtn.addEventListener("click", convertirAnios);
