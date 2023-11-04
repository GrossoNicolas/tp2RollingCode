var nombres = [];
var edades = [];


for (var i = 0; i < 3; i++) {
  var nombre = prompt("Introduce un nombre:");
  var edad = parseInt(prompt("Introduce la edad de " + nombre + ":"));

  nombres.push(nombre);
  edades.push(edad);
}


var indiceMayor = 0;
for (var i = 1; i < edades.length; i++) {
  if (edades[i] > edades[indiceMayor]) {
    indiceMayor = i;
  }
}

var nombreMayor = nombres[indiceMayor];
var edadMayor = edades[indiceMayor];


alert("La persona mayor es " + nombreMayor + " con " + edadMayor + " años.");
