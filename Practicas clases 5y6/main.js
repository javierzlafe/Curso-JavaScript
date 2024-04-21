// funcion constructora de productos
function Producto(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.vender = function(cantidad){
        if(cantidad > this.stock){
            alert("no hay suficiente stock")
        }else{
            this.stock -= cantidad
            alert(`se vendieron ${cantidad} unidades de ${this.nombre}. Stock restante de ${this.stock} `)
        }
    }
}

//funcion para crear un nuevo producto
function gestionProductos(){
    let nombre = prompt("ingresa el nombre del producto:")
    let precio = parseFloat(prompt("ingresa el precio del producto:")) 
    let stock = parseInt(prompt("ingresa el stock del producto:")) 
    let miProducto = new Producto(nombre,precio,stock)
    let cantidadVender = parseInt(prompt("ingrese la cantidad a vender: "))
    miProducto.vender(cantidadVender)
}


gestionProductos()
