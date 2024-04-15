/* Las funciones en JavaScript son bloques de código reutilizables que se utilizan 
para realizar una tarea específica. 
Permiten dividir un programa en partes más pequeñas, 
lo que facilita la lectura, escritura y mantenimiento del código.

Al definir una función, especificamos una serie de instrucciones 
que queremos que se ejecuten cuando llamamos a esa función. 
Esto nos permite encapsular una lógica específica y ejecutarla en diferentes partes de nuestro programa 
sin tener que volver a escribir el mismo código una y otra vez.

Las funciones en JavaScript se definen utilizando la palabra clave function, 
seguida de un nombre de función y un conjunto de paréntesis que pueden contener parametros
(también conocidos como argumentos).*/

function saludar() {                    //creo la funcion
    console.log("¡Hola, mundo!")        //le digo lo que va a hacer
}


saludar()                               //la llamo para que se ejecute


/* Cuando llamamos a la función saludar(), 
el código dentro de la función se ejecuta y se imprime "¡Hola, mundo!" en la consola. */







/* 

Los parámetros en JavaScript son valores que podemos pasar a una función cuando la llamamos. Estos parámetros son variables locales que están disponibles dentro del cuerpo de la función y nos permiten personalizar el comportamiento de la función según nuestras necesidades.

Aquí te muestro un ejemplo básico de una función que toma un parámetro:*/


function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludar("Javier")



//Podemos pasar múltiples parámetros a una función separándolos por comas. Por ejemplo:

function sumar(a, b) {
    return a + b;
}

let resultado = sumar(3, 5);
console.log(resultado); // Imprimirá 8


/*En este caso, la función sumar toma dos parámetros a y b, y devuelve la suma de estos dos valores. 
Cuando llamamos a la función sumar(3, 5), los valores 3 y 5 se pasan como argumentos a los parámetros a y b, 
y la función devuelve su suma, que es 8.

Los parámetros nos permiten hacer nuestras funciones más flexibles y reutilizables, 
ya que podemos personalizar su comportamiento al llamarlas con diferentes valores.
*/







/* 
FUNCIONES ANONIMAS:
Una función anónima es una función que no tiene un nombre. 
Se definen utilizando la palabra clave function seguida de paréntesis que pueden contener 
los parámetros de la función, y luego un bloque de código entre llaves {} que especifica qué hace la función.*/


let suma = function(a, b) {
    return a + b;
}


/*ahora creamos una variable llamada suma, definimos una función anónima que toma dos parámetros a y b, 
y devuelve su suma. Esta función se asigna a la variable suma.*/




/*FUNCIONES FLECHA:
Las funciones flecha son una forma más concisa y moderna de definir funciones en JavaScript. 
Se representan con una sintaxis más corta y mas legible.*/


let sumar = (a, b) => {
    return a + b;
};

/*Definimos una función flecha que hace lo mismo que la función anónima anterior: 
toma dos parámetros a y b, y devuelve su suma. 
Se las conoce como funciones flecha porque el simbolo despues de los parentesis 
(los argumentos), parece una flecha
*/




// Javier Gimenez
// https://www.youtube.com/watch?v=FBpjCwyCJCE&t=321s
