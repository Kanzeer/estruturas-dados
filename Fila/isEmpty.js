let fila = [];
fila.isEmpty = function() {
    return this.length === 0;
};
fila.enqueue = function(item) {
    this.push(item);
};

console.log(fila.isEmpty()); //exit true
fila.enqueue(1);
console.log(fila.isEmpty()); //exit false