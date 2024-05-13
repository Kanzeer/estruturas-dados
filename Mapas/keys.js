let mapa = new Map();
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let iterador = mapa.keys();
for (let chave of iterador) {
    console.log(chave);
}
/*
exit
chave1
chave2
*/