let fila = [1, 2, 3];
Array.prototype.peek = function() {
    return this[0];
};

console.log(fila.peek()); //exit 1
console.log(fila); //exit 1, 2, 3 fila permanece inalterada