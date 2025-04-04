// Armazenando uma função anônima em uma variável 
const imprimirSoma = function (a, b) {
    console.log(a + b)
};

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variavel (função reduzida)
const soma = (a, b) => {
    return a + b
};

console.log(soma(2, 3));

//retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(6, 3));

//retorno implícito de um único parâmetro
const imprimir2 = a => console.log(a);
imprimir2('Legal!!!');