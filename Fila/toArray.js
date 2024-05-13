let fila = [1, 2, 3];
fila.toArray = function() {
    return this.slice();
};

let arrayFila = fila.toArray();
console.log(arrayFila); //exit 1, 2, 3