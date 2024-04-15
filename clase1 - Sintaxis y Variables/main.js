/* 
Variables: Son espacios de memoria que almacenana datos y pueden 
cambiar de valor durante la ejecución del programa.*/
let variable = 10

/*Constantes: Almacenan valores que no cambian durante la ejecución del programa. 
Son como variables, pero su valor no puede ser modificado una vez que se ha asignado.*/
const constante = 5

/*parseInt: Es una función en JavaScript que convierte una cadena de texto en un número entero. 
Por ejemplo, parseInt("10") devolverá el número 10.*/
let entero = parseInt("10")

/*parseFloat: Similar a parseInt, pero convierte una cadena de texto en un número decimal (flotante). 
Por ejemplo, parseFloat("10.5") devolverá 10.5. (este tambien acepta enteros)*/
let decimal = parseFloat("10.5")

/*alert: Es una función que muestra un cuadro de diálogo con un mensaje en el navegador. 
Se utiliza para dar información al usuario de forma inmediata.*/
alert("Hola, mundo!")


/*console.log: Imprime mensajes en la consola del navegador. 
Se utiliza principalmente para depurar y mostrar información sobre el estado de un programa.*/
console.log("Mensaje de depuración/por consola")

/*prompt: Es una función que muestra un cuadro de diálogo con un mensaje y permite al usuario introducir datos. 
Se utiliza para solicitar información al usuario en forma de texto (ingreso por teclado).*/
let entrada = prompt("Ingrese un número:");



/*      En JavaScript, se pueden realizar operaciones básicas
        matemáticas utilizando operadores aritméticos. 
        Cuales son los operadores más comunes para realizar operaciones básicas?
        suma, resta, multiplicacion, division, etc */

    let  numeroA = 1;
    let   numeroB = 2;
    const numeroC = 3;
    //Suma  de dos números (1 + 2 = 3)
    let resultadoSuma  = numeroA + numeroB;
    //Resta de dos números (2 - 1 = 1)
    let resultadoResta = numeroB - numeroA;
    //Producto de dos números (2 * 3 = 6)
    let resultadoProducto = numeroB * numeroC;


//Usando la herramienta prompt, podemos pedir un nombre, y luego mostrarlo por alert

    let nombre = prompt("nombre")

    alert("bienvenido " + nombre) 

    //(recorda enlazar html con js para visualizar este alerta en la pantalla)



//Tambien tenemos mensajes de consola con alertas y errores
console.warn("mensaje de cuidado")
console.error("mensaje de error")
let valor = confirm("deseas salir?")  //confirm toma valor bool verdadero/falso





// Javier Gimenez
// https://www.youtube.com/watch?v=sQNCeATznr4&t=88s