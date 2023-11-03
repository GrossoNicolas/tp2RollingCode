
        while (true) {
            let numeroDNI = prompt("Ingrese su DNI (0-99999999):");

            
            if (numeroDNI === null) {
                alert("Gracias por usar la calculadora de letra del DNI.");
                break;
            }

          
            numeroDNI = parseInt(numeroDNI);

       
            if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
                alert("Número de DNI no válido. Debe estar entre 0 y 99999999.");
            } else {

                const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
                const resto = numeroDNI % 23;
                const letra = letrasDNI.charAt(resto);

                alert("La letra del DNI " + numeroDNI + " es: " + letra);
            }
        }

