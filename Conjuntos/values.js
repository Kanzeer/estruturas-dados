let conjunto = new Set([1, 2, 3]);
let iterador = conjunto.values();

console.log(iterador.next().value); //exit 1
console.log(iterador.next().value); //exit 2
console.log(iterador.next().value); //exit 3