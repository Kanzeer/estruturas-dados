Array.prototype.toString = function() {
    return this.join(',');
};

let pilha = [10, 20, 30];
let string = pilha.toString();
console.log(string); //exit '10,20,30'