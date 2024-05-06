let array = [1, 2, 3, 4, 5];
let sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); //exit: 15 (soma de todos os elementos)