const personPrototype = {
    greet: function() {
        console.log(`Olá, meu nome é ${this.name}`);
    }
};

const objMiguel = Object.create(personPrototype);
objMiguel.name = "Miguel";
objMiguel.greet(); //exit: Olá, meu nome é Miguel