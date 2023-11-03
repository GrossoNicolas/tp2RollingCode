const niveles = 30; 

for (let i = 1; i <= niveles; i++) {
  let linea = '';


  for (let j = 1; j <= i; j++) {
    linea += i;
  }

  console.log(linea);
}
