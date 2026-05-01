const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Television 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

// ForEach

// carrito.forEach(function (producto) {
//     console.log(producto.nombre);
// })


carrito.forEach(producto => console.log(producto.nombre))  // forEach muestra los elementos en consola


// Map

carrito.map(producto => console.log(producto.nombre))   // map crea un nuevo arreglo