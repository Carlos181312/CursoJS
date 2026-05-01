// Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...");

        setTimeout(function () {
            resolve("Los clientes fueron Descargados");
        }, 5000)

    })
}


async function app() {
    try {
        const resultado = descargarNuevosClientes();
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

app();