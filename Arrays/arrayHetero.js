let meuArray = [1, "dois", {nome: "João"}, [4, 5, 6], function() { return "Função dentreo de um array"; }];

//acessando elementos do array
console.log(meuArray[0]); //exit: 1
console.log(meuArray[2]); //exit: {nome: 'João'}

//adicionando elementos ao array
meuArray.push(7);
console.log(meuArray) //exit: [1, 'dois', { nome: 'João'}, [4, 5, 6], [Function (anonymous)], 7]

//iterando sobre os elementos do array
meuArray.forEach(function(elemento) {
    console.log(elemento);
});
//exit: 1, dois, { nome: 'Joao' }, [4, 5, 6], [Function (anonymous)], 7