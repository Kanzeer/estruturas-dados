const person = {
    name: "Miguel",
    age: 16,
    city: "Vg city"
};
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); //exit: ['name', 'age', 'city']