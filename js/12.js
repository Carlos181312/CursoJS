// "use strict";  // Ejecuta JS en modo estricto

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);  // Object.freese no permite que se le agregue, elimine o modifique propiedades.
// Object.seal(producto)  // Object.seal permite modificar las propiedades existentes, pero no puede agregar o eliminar. 

producto.imagen = "imagem.jpg";

console.log(Object.isFrozen(producto));

console.log(producto);

