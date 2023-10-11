const Producto = function (nombre,precio,stock){

this.nombre = nombre
this.precio = precio
this.stock = stock


}

    let producto1 = new Producto ("la virginia", 800, 20)
    let producto2 = new Producto ("nescafe", 1500, 2)
    let producto3 = new Producto ("arlistan", 700, 25)
    let producto4 = new Producto ("cabrales", 1200, 5)
    let producto5 = new Producto ("nescafe gold", 2000, 1)
    let producto6 = new Producto ("starbucks", 2500, 20)



    let lista = [producto1,producto2,producto3,producto4,producto5,producto6]


    function filtrarProductos() {
        let marcasDisponibles = ["la virginia", "nescafe", "arlistan", "cabrales", "nescafe gold", "starbucks"];
        let palabraClave;
    
        while (true) {
            palabraClave = prompt("Ingresa la marca del café que deseas buscar. Tenemos en stock: " + marcasDisponibles.join(", ")).trim().toLowerCase();
    
            if (marcasDisponibles.includes(palabraClave)) {
                break;
            } else {
                alert("Marca no válida. Por favor, elige una marca de café de la lista: " + marcasDisponibles.join(", "));
            }
        }
    
        let resultado = lista.filter(producto => producto.nombre.toLowerCase().includes(palabraClave));
        if (resultado.length > 0) {
            console.table(resultado);
        } else {
            alert("No se encontraron productos de la marca " + palabraClave);
        }
    }
    

function agregarProducto(){
let nombre = prompt("ingresa el nombre del producto").trim()
let precio = parseFloat (prompt("ingresa el precio"))
let stock = parseInt (prompt("ingresa el stock"))

if (isNaN(precio) || nombre ==="" || isNaN (stock)){

    alert("por favor , ingresa datos validos")
    return ;
}

let producto = new Producto(nombre,precio,stock)

    lista.push(producto)

console.table(lista)
}



