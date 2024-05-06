const person = {
    name: "Miguel",
    age: 16,
    city: "Vg city"
};
Object.freeze(person);
person.age = 31; //isso não terá efeito porque o objeto está congelado
console.log(person); //exit {name: 'Miguel', age 16, city: 'Vg city'}