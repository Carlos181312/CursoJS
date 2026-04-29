// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

// console.log(numeros);
// console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");

// console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, { nombre: "Carlos", trabajo: "Programador" }, [1, 2, 3]];
// console.log(arreglo);
// console.table(arreglo);



// Acceder a los valores de un Array

// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[5]);

// Conocer la extensión de un arreglo

// console.log(meses.length);

/*

meses.forEach(function (mes) {
    console.log(mes)
})

*/


// numeros[5] = 60;

numeros.push(60, 70, 80);  // Agrega elementos al final del arreglo

numeros.unshift(-10, -20, - 30);  // Agrega elementos al inicio del arreglo

meses.pop();     // Elimina el ultimo elemento del array
meses.shift();   // Elimina el primer elemento del array
meses.splice(2, 1);   // Elimina un elemento especifico dentro del array

console.table(numeros);

console.table(meses);


// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, "Julio"];

console.table(nuevoArreglo);
