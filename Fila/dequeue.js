let fila = [1, 2, 3]; //definindo a função dequeue como parte do prototipo Array
Array.prototype.dequeue = function() {
    return this.shift();
};

console.log(fila.dequeue()); //exit 1
console.log(fila); //exit 2, 3