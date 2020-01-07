function holamundo(nombre) {
    return "holamundo ss" + nombre;
}
var nombre = "alx ss";
var resultado = holamundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//variables y tipos 
var nombre = "alex";
var edad = 55;
var programador = true;
var langs;
etiqueta.innerHTML = nombre + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("dentro del if:" + a_1 + " - " + b);
}
console.log("fuera del if:" + a + " - " + b);
//la diferencia entre let y var es que despues de que pasa por una condicion y sale de la condicion  el valor asignado en la variable a cambia a su forma original y 
//al salir de la condicion la variable  b sigue con su resultado que quedo dentro de la condicion 
//var es global 
//let es en bloque  
//funciones y tipado
function devuelvenumero(num) {
    return "numero devuelto: " + num;
}
function devuelvestring(texto) {
    if (texto == "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelvenumero(34));
alert(devuelvestring("hola"));
