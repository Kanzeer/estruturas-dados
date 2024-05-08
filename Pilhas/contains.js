Array.prototype.contains = function(element) {
    return this.indexOf(element) !== -1;
};

let pilha = [10, 20, 30];
console.log(pilha.contains(20)); //exit true
console.log(pilha.contains(40)); //exit false