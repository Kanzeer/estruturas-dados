const person = {
    name: "Miguel",
    age: 16,
    city: "Vg city"
};
console.log(person.hasOwnProperty('name')); //exit: true
console.log(person.hasOwnProperty('toString')); //exit: false (toString é uma propriedade herdada)