let mapa = new Map()
mapa.set('chave1', 'valor1');

console.log(mapa.get('chave1')); //exit valor1
console.log(mapa.get('chave2')); //exit undefined (pois a chave2 não existe)