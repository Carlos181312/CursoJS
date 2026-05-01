// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript");



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

meses.forEach(mes => {
    if (mes == "Marzo") {
        console.log("Marzo si existe")
    }
})


let resultado;

// Some ideal para buscar elementos dentro de un array que se encuentren en un objeto
resultado = carrito.some(producto => producto.nombre === "Celular"
)


// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// Filter
resultado = carrito.filter(producto => producto.precio > 400)


resultado = carrito.filter(producto => producto.nombre === "Celular");


console.log(resultado);


