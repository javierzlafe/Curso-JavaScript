
/* 
Las funciones constructoras en JavaScript son funciones que se utilizan 
para crear y configurar objetos. Son una forma de definir un "molde" o "plantilla" 
para crear múltiples objetos con las mismas propiedades y métodos. */




 function Persona(nombre,apellido){
    this.nombre = nombre
    this.apellido= apellido
}

let persona1 = new Persona("javier", "gimenez") //creo una nueva persona

alert(persona1.nombre)



//las funciones constructoras suelen tener "metodos"


function Coche(color, marca){
    this.color= color
    this.marca= marca

    this.arrancar = function(){  //el metodo arrancar pertenece a todos los coches creados
        alert("el " + marca +  " ya esta en marcha")
    }

}


let coche1 =  new Coche("negro", "audi")
let coche2 =  new Coche("rojo", "ferrari")
let coche3 =  new Coche("amarillo", "fiat")



coche1.arrancar()  //usamos el metodo arrancar, para cualquier coche


/* function Persona(nombre,apellido){
    this.nombre = nombre
    this.apellido= apellido
}*/





//Las clases son una manera mas actual de crear objetos, pero tienen la misma funcion
class Persona{

    constructor(nombre,apellido){

        this.nombre = nombre
        this.apellido= apellido

    }

}




// Javier Gimenez
// https://www.youtube.com/watch?v=bngIfa9x6lI&t=822s