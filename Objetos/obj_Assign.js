const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const merged = Object.assign({}, target, source);
console.log(merged); //exit: {a: 1, b: 4, c: 5}