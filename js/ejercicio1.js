// Solicitar la edad al usuario
const edadStr = prompt("Ingrese su edad:");

// Convertir la entrada a un número en punto flotante (float)
const edad = parseFloat(edadStr);

// Verificar si la entrada es un número válido y si la edad es mayor de 18 años
if (!isNaN(edad) && edad >= 18) {
    alert("¡Ya puedes conducir!");
} else if (isNaN(edad)) {
    alert("La entrada no es un número válido. Por favor, ingrese su edad como un número.");
} else {
    alert("No cumple con la edad mínima para conducir.");
}
