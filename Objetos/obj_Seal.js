const person = {
    name: "Miguel",
    age: 16,
    city: "Vg city"
};
Object.seal(person);
person.age = 31; //isso tera efeito as propriedades do objeto esta selado, mas não o valor da propriedade
person.gender = "masculino"; //isso não tera efeito porque não podemos adicionar outras propriedades pois ela esta selada
console.log(person); //exit: {name: 'Miguel', age: 31, city: 'Vg city'}