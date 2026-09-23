const pedidos = [];

function agregarPedido(producto){
pedidos.push({nombre: producto.nombre,precio: producto.precio});

}

function modificarPedido(posicion,nombre,precio){
if(posicion >=0 && posicion<pedidos.length){

        pedidos[posicion].nombre =nombre;
        pedidos[posicion].precio =precio;
return true;
    } return false;
}

function eliminarPedido(posicion){
if(posicion>=0 && posicion < pedidos.length){
pedidos.splice(posicion,1);
return true;
    }
    return false;
}

function listarPedidos(){
console.log("\nPEDIDOS");
let total = 0;

    if(pedidos.length==0){
    console.log("no hay pedidos");
    }else{
    for(let i= 0;i<pedidos.length;i++){
    console.log(`${i + 1}.${pedidos[i].nombre}-$${pedidos[i].precio}`);
    total =total+ pedidos[i].precio;
        }
    }

    console.log("TOTAL ACUMULADO");
    console.log(total);
}

export {pedidos,agregarPedido,modificarPedido,eliminarPedido,listarPedidos};