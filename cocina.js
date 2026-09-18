// Array de objetos que contiene los productos de cocina
let productosCocina = [
    { id: 1, nombre: 'sopa', precio: 60 },
    { id: 2, nombre: 'pollo', precio: 100 },
    { id: 3, nombre: 'chilaquiles', precio: 40 },
    { id: 4, nombre: 'Hot cakes', precio: 30 },
    { id: 5, nombre: 'Hamburguesa', precio: 110 },
    { id: 6, nombre: 'Pure de papa', precio: 50 }
];

// 1. LISTAR: Muestra que muestre todos los productos actuales 
function listarProductos() {
    console.log("=== LISTA DE PEDIDOS / PRODUCTOS ===");
    productosCocina.forEach(p => {
        console.log(`ID: ${p.id} | Producto: ${p.nombre} | Precio: $${p.precio}`);
    });
    console.log("------------------------------------\n");
}

// 2. AGREGAR: Inserta un nuevo objeto con sus propiedades al array
function agregarProducto(id, nombre, precio) {
    const nuevoProducto = { id, nombre, precio };
    productosCocina.push(nuevoProducto);
    console.log(`¡Producto "${nombre}" agregado con éxito!\n`);
}

// 3. EDITAR: Modifica la propiedad de un producto existente buscándolo por su ID
function editarProducto(id, nuevoPrecio) {
    let producto = productosCocina.find(p => p.id === id);
    if (producto) {
        producto.precio = nuevoPrecio;
        console.log(`¡El precio del producto con ID ${id} fue actualizado a $${nuevoPrecio}!\n`);
    } else {
        console.log("Producto no encontrado.\n");
    }
}

// 4. ELIMINAR: Borra un producto del array utilizando su ID
function eliminarProducto(id) {
    productosCocina = productosCocina.filter(p => p.id !== id);
    console.log(`¡Producto con ID ${id} eliminado del sistema!\n`);
}

// --- EJECUCIÓN DE PRUEBAS ---

// Listamos el estado inicial con los platillos solicitados
listarProductos();

// Ejemplo de AGREGAR un nuevo platillo extra
agregarProducto(7, "Jugo natural", 35);
listarProductos();

// Ejemplo de EDITAR el precio de los chilaquiles (ID 3) a $45
editarProducto(3, 45);
listarProductos();

// Ejemplo de ELIMINAR la sopa (ID 1)
eliminarProducto(1);
listarProductos();