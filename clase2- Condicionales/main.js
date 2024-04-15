//nombre = "javier"

//console.log(nombre.toLowerCase())  //MAYUSCULA
//console.log(nombre.toUpperCase())   //minuscula
//console.log(nombre.length)  //cantidad de caracteres




/* 
Condicionales: 
En JavaScript, los condicionales permiten ejecutar cierto bloque de código 
dependiendo de si una condición es verdadera o falsa. 
Los más comunes son if, else if y else.

Operadores lógicos || (OR), && (AND) y ! (NOT): 
Estos operadores se utilizan para combinar múltiples condiciones en una expresión lógica. 
|| devuelve true si al menos una de las condiciones es verdadera, 
&& devuelve true solo si todas las condiciones son verdaderas, 
y ! invierte el valor booleano de una expresión.

Valores booleanos: Los valores booleanos son verdadero (true) o falso (false). 
Se utilizan en expresiones condicionales y en operaciones lógicas 
para controlar el flujo del programa.
*/

// Ejemplo de condicional if
let edad = 18;
if (edad >= 18) {
    console.log("Puedes ingresar al sitio.");
} else {
    console.log("No puedes ingresar al sitio.");
}



// Ejemplo de operador && en una expresión condicional
let esEstudiante = false;
let esEmpleado = true;

if (esEstudiante && esEmpleado) {
    console.log("Eres estudiante y empleado.");
} else if (esEstudiante) {
    console.log("Eres solo estudiante.");
} else if (esEmpleado) {
    console.log("Eres solo empleado.");
} else {
    console.log("No eres ni estudiante ni empleado.");
}




// Ejemplo de operador ! (NOT) en una expresión condicional
let esHombre = true;

if (!esHombre) {
    console.log("Eres mujer.");
} else {
    console.log("Eres hombre.");
}




// Ejemplo de valores booleanos
let esMayorDeEdad = true;
let tieneDNI = true;

if (esMayorDeEdad && tieneDNI) {  //si ambos son true, el if se ejecuta
    console.log("Puede votar en las elecciones.");
} else {
    console.log("No puede votar en las elecciones.");
}



// Javier Gimenez
// https://www.youtube.com/watch?v=WrgL_vAHpzI&t=15s