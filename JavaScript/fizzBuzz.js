// FizzBuzz!!

/*
    Crear la logica del ejersicion de fizzbuzz con los numeros del 0 al 20,
    estos se deben mostrar por consola.
*/
// Opcion 1.
// Esta primer opcion es mas compleja ya que tenemos que crear una funcion y el codigo del for va adentro de la misma. 

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20); 

// Opcion 2.
// Esta es otra opcion es mas simple ya que no es necesario crear una funcion y usar este codigo dentro de la misma.

for( let i = 0; i <= 100; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz!!');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}