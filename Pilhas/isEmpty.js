Array.prototype.isEmpty = function() {
    return this == 0;
};

let pilha = [];
console.log(pilha.isEmpty()); //exit true

pilha.push(10);
console.log(pilha.isEmpty()); //exit false