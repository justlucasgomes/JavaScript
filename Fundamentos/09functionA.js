//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
};

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);

//Função com retorno
function soma(a, b = 0) {
    return a + b
};
console.log(soma(3, 3));
console.log(soma(2));