function limpiar (){
    document.getElementById('miFormulario').form.reset(); // Eliminar todo lo que este en mi formulario
}

function sumar (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x + y; 
}
function restar (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x - y; 
}
function multiplicar (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x * y; 
}
function dividir (){
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x / y; 
}

document.getElementById('el-resultado').innerHTML = x + y;



