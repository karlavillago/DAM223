// Lista maestra de productos con sus precios
const menu = [
    { nombre: 'Sopa', precio: 45 },
    { nombre: 'Pollo', precio: 85 },
    { nombre: 'Chilaquiles', precio: 70 },
    { nombre: 'Hot cakes', precio: 60 },
    { nombre: 'Hamburguesa', precio: 90 },
    { nombre: 'Pure de papa', precio: 35 }
];

function listarMenu() {
    return menu;
}


function obtenerPlatillo(nombre) {
    const busqueda = nombre.trim().toLowerCase();
    return menu.find(platillo => platillo.nombre.toLowerCase() === busqueda) || null;
}

function agregarPlatillo(orden, nombre) {
    const platillo = obtenerPlatillo(nombre);

    if (platillo) {
        orden.push({ nombre: platillo.nombre, precio: platillo.precio });
        return platillo;
    }

    return null;
}

function editarPlatillo(orden, nombreAnterior, nombreNuevo) {
    const busqueda = nombreAnterior.trim().toLowerCase();
    const platilloEnOrden = orden.find(item => item.nombre.toLowerCase() === busqueda);

    if (platilloEnOrden) {
        // Verifica si el nuevo nombre existe en el menú para actualizar también su precio
        const nuevoPlatilloMenu = obtenerPlatillo(nombreNuevo);
        if (nuevoPlatilloMenu) {
            platilloEnOrden.nombre = nuevoPlatilloMenu.nombre;
            platilloEnOrden.precio = nuevoPlatilloMenu.precio;
            return platilloEnOrden;
        }
    }

    return null;
}

function eliminarPlatillo(orden, nombre) {
    const busqueda = nombre.trim().toLowerCase();
    const posicion = orden.findIndex(item => item.nombre.toLowerCase() === busqueda);

    if (posicion !== -1) {
        return orden.splice(posicion, 1)[0];
    }

    return null;
}

function listarOrden(orden) {
    return orden;
}

// Función para calcular el total acumulado de la orden
function calcularTotal(orden) {
    let total = 0;
    orden.forEach(item => {
        total += item.precio;
    });
    return total;
}

module.exports = {
    menu,
    listarMenu,
    obtenerPlatillo,
    agregarPlatillo,
    editarPlatillo,
    eliminarPlatillo,
    listarOrden,
    calcularTotal
};