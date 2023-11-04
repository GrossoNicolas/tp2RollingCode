const nombres = [];
const edades = [];


for (var i = 0; i < 3; i++) {
  const nombre = prompt("Introduce un nombre:");
  const edad = parseInt(prompt("Introduce la edad de " + nombre + ":"));

  nombres.push(nombre);
  edades.push(edad);
}


const indiceMayor = 0;
for (var i = 1; i < edades.length; i++) {
  if (edades[i] > edades[indiceMayor]) {
    indiceMayor = i;
  }
}

const nombreMayor = nombres[indiceMayor];
const edadMayor = edades[indiceMayor];


alert("La persona mayor es " + nombreMayor + " con " + edadMayor + " años.");
