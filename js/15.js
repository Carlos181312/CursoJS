// Array methods

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");

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

// forEach

meses.forEach(function (mes) {
    if (mes == "Marzo") {
        console.log("Marzo si existe")
    }
})

// Includes
let resultado = meses.includes("Diciembre");

// Some ideal para buscar elementos dentro de un array que se encuentren en un objeto
resultado = carrito.some(function (producto) {
    return producto.nombre == "Celular"
})

// Reduce
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);

// Filter
resultado = carrito.filter(function (producto) {
    return producto.precio > 400
})


resultado = carrito.filter(function (producto) {
    return producto.nombre === "Celular"
})


console.log(resultado)