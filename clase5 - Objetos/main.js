/* 
los objetos son estructuras de datos que nos permiten almacenar 
y organizar información de manera más compleja que las simples variables. 
Un objeto puede contener múltiples valores, llamados propiedades, 
que están asociados con nombres específicos, llamados claves o identificadores.
*/


let persona = {
    //clave:valor
    nombre:"javier",
    edad: 33,
    direccion:{
        ciudad: "buenos aires",
        calle: "av siempre viva",
        numero: 1234
    }
}

persona.nombre = "francisco"  //le reasigno el valor a la clave "nombre"

alert(persona.nombre)   


// Javier Gimenez
// https://www.youtube.com/watch?v=cjHeQo-VUEE&t=53s