Array.prototype.clear = function() {
    this.length = 0;
};

let pilha = [10, 20, 30];
pilha.clear();
console.log(pilha); //exit []