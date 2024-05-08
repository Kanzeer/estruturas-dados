Array.prototype.toArray = function() {
    return this.slice();
};

let pilha = [10, 20, 30];
let array = pilha.toArray();
console.log(array); //exit [10, 20, 30]