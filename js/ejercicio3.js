let cadenas = []; 

while (true) {
  let cadena = prompt("Ingrese una cadena de texto (o haga clic en Cancelar para finalizar):");
  
  if (cadena === null) {
    break; 
  }
  
  cadenas.push(cadena); 
}

if (cadenas.length > 0) {
  
  const resultado = cadenas.join(' - ');
  alert("Cadenas concatenadas: " + resultado);
} else {
  alert("No se ingresaron cadenas.");
}
