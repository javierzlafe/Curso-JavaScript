/* 
Ciclos e iteraciones: 
En JavaScript, los ciclos permiten repetir un bloque de código 
hasta que se cumpla una condición específica. 
Los ciclos más comunes son for, while y do...while.


Bucle for: Se utiliza cuando se conoce el número exacto de repeticiones 
que se deben realizar.


Bucle while: Se utiliza cuando no se conoce el número exacto de repeticiones, 
pero se sabe que se deben realizar mientras se cumpla una condición.


Bucle do...while: Similar a while, pero garantiza que el bloque de código se ejecute al menos una vez 
antes de evaluar la condición.

*/

// Ejemplo de bucle for para imprimir los números del 1 al 5


 //ESTRUCTURA DEL FOR

//for (inicio, limite o condicion, incremento)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}



//OJO CON LOS BUCLES INFINITOS!!!
// Ejemplo de bucle while para imprimir los números pares del 2 al 10
let numero = 2;
while (numero <= 10) {
    console.log(numero);
    numero += 2;
}




// Ejemplo de bucle do...while para solicitar un número mayor a 10
let numeroIngresado;
do {
    numeroIngresado = parseInt(prompt("Ingrese un número mayor a 10:"));
} while (numeroIngresado <= 10);

alert("Número ingresado válido: " + numeroIngresado);




// Javier Gimenez
 // https://www.youtube.com/watch?v=W7bNGBPuSUI&t=34s