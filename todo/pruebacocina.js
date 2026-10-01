const readline = require('readline');
const cocina = require('./cocina.js');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const orden = [];

function preguntar(texto) {
    return new Promise(resolve => {
        entrada.question(texto, resolve);
    });
}

function mostrarLista(lista) {
    if (lista.length === 0) {
        console.log('  (La lista está vacía)');
        return lista;
    }

    lista.forEach((platillo, posicion) => {
        console.log(`  ${posicion + 1}. ${platillo.nombre} - $${platillo.precio}`);
    });

    return lista;
}

async function iniciar() {
    let opcion;

    do {
        console.log('\n==================================');
        console.log('       SISTEMA DE COCINA          ');
        console.log('==================================');
        console.log('1. Ver menú completo');
        console.log('2. Agregar platillo a la orden');
        console.log('3. Editar platillo de la orden');
        console.log('4. Eliminar platillo de la orden');
        console.log('5. Mostrar orden final, total y salir');
        console.log('----------------------------------');

        opcion = await preguntar('Selecciona una opción: ');

        if (opcion === '1') {
            console.log('\n--- MENÚ DISPONIBLE ---');
            mostrarLista(cocina.listarMenu());

        } else if (opcion === '2') {
            console.log('\n--- AGREGAR PEDIDO ---');
            const nombre = await preguntar('¿Qué platillo deseas pedir?: ');
            const platillo = cocina.agregarPlatillo(orden, nombre);

            if (platillo) {
                console.log(`✓ "${platillo.nombre}" agregado con éxito ($${platillo.precio}).`);
            } else {
                console.log('✗ Ese platillo no existe en el menú.');
            }

        } else if (opcion === '3') {
            console.log('\n--- ORDEN ACTUAL ---');
            mostrarLista(cocina.listarOrden(orden));

            if (orden.length > 0) {
                const anterior = await preguntar('\nPlatillo que deseas cambiar: ');
                const nuevo = await preguntar('Nombre del nuevo platillo del menú: ');
                const platillo = cocina.editarPlatillo(orden, anterior, nuevo);

                console.log(
                    platillo
                        ? `✓ Platillo cambiado correctamente por "${platillo.nombre}".`
                        : '✗ No se pudo editar (revisa si el platillo estaba en tu orden o existe en el menú).'
                );
            }

        } else if (opcion === '4') {
            console.log('\n--- ORDEN ACTUAL ---');
            mostrarLista(cocina.listarOrden(orden));

            if (orden.length > 0) {
                const nombre = await preguntar('\nPlatillo que deseas eliminar: ');
                const platillo = cocina.eliminarPlatillo(orden, nombre);

                console.log(
                    platillo
                        ? `✓ "${platillo.nombre}" eliminado de la orden.`
                        : '✗ Platillo no encontrado en tu orden.'
                );
            }

        } else if (opcion === '5') {
            console.log('\n==================================');
            console.log('           ORDEN FINAL            ');
            console.log('==================================');

            if (orden.length === 0) {
                console.log('La orden final está vacía.');
            } else {
                mostrarLista(cocina.listarOrden(orden));
                const total = cocina.calcularTotal(orden);
                console.log('----------------------------------');
                console.log(`TOTAL ACUMULADO: $${total}`);
            }
            console.log('==================================\n');
        } else {
            console.log('✗ Opción no válida. Intenta de nuevo.');
        }

    } while (opcion !== '5');

    return entrada.close();
}

iniciar();