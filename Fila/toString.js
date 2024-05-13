let fila = [1, 2, 3];
fila.toString = function() {
    return this.join(', ');
};

console.log(fila.toString()); //exit "1, 2, 3"