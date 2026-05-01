const usuarioAutenticado = new Promise(function (resolve, reject) {
    const auth = false;

    if (auth) {
        resolve("Usuario Autenticado ");
    } else {
        reject("No se pudo iniciar sesión");
    }
})

usuarioAutenticado
    .then(function (resultado) {
        console.log(resultado)
    })
    .catch(function (error) {
        console.log(error)
    })

// En los Promises existen 3 valore
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir