// Declaración de Función

function sumar(numero1 = 0, numero2 = 0) {   // numero1, 2 son parametros
    console.log(numero1 + numero2);
}

sumar(10, 10)  // Argumentos o los valores reales
sumar(3, 3)
sumar(3, 6)
sumar(1)


// Expresión de la función

const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();
