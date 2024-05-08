// Carrera automovilistica!! 
/*
    Enunciado:
    En una carrera automovilistica se desea calcular cuál es cl MAYOR
    tiempo realizado por cada ono de.sus 12 competidores. Para ello, se
    pide on algoritmo que sea capaz de permitir el ingreso por teclado
    del número de vehiculo y el tiempo (en segundos) de cada
    participante. Una vez calculado èei que cumplió esa condición, se
    debe informar por pantalla tanto ef nómero de vehículo que
    utilizaba como el tiempo que llevó a cabo.
*/

// Función para encontrar al competidor con el mayor tiempo
function competidorConMayorTiempo(competidores) {
    // Variables para definir el tiempo máximo y al competidor con mayor tiempo
    let mayorTiempo = 0;
    let competidorConMayorTiempo = null;

    // Iteramos sobre cada competidor
    for (let i = 0; i < competidores.length; i++) {
        // Verificamos si el tiempo del competidor actual es mayor que el tiempo máximo registrado
        if (competidores[i].tiempo > mayorTiempo) {
            mayorTiempo = competidores[i].tiempo;
            competidorConMayorTiempo = competidores[i];
        }
    }

    return competidorConMayorTiempo;
}

// Función para ingresar los datos por teclado
function ingresarDatos() {
    // Array para almacenar los datos.
    let competidores = [];

    // Iteramos 12 veces para ingresar los datos de los 12 competidores.
    for (let i = 0; i < 12; i++) {
        // Ingresamos los datos del competidor
        let numeroCompetidor = parseInt(prompt("Ingrese el número de competidor"));
        let tiempo = parseInt(prompt("Ingrese el tiempo del competidor"));

        // Agregamos el competidor al array
        competidores.push({ numeroCompetidor: numeroCompetidor, tiempo: tiempo });
    }
    return competidores;
}

// Llamamos a la funciónes
let competidores = ingresarDatos();
let competidorMayorTiempo = competidorConMayorTiempo(competidores);

// Mostramos los datos por consola.
console.log('El competidor con mayor tiempo es: ' + competidorMayorTiempo.numeroCompetidor + ' con un tiempo de: ' + competidorMayorTiempo.tiempo + ' segundos');
