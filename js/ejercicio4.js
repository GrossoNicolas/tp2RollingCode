let suma = 0;

while (true) {
  let input = prompt("Ingrese un número (o haga clic en Cancelar para finalizar):");

  if (input === null) {
    break; 
  }

  let numero = parseFloat(input);

  if (!isNaN(numero)) {
    suma += numero; 
  } else {
    alert("No es un número válido. Intente nuevamente.");
  }
}

alert("La suma total de los números es: " + suma);
