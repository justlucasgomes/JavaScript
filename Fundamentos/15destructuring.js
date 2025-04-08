//​Em JavaScript, destructuring é uma expressão que permite extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis distintas de forma concisa e legível.

const pessoa = {
    nome: 'Lucas',
    idade: 30,
    endereco: {
        logradouro: 'São Januário',
        numero: 22,
        complemento: 'apto 203'
    }
};

const {nome, idade} = pessoa; //Destructuring
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero)

//Destructuring em parametros de função com objeto
function rand({min=0, max=1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max:50, min: 40}
console.log(obj);
console.log(rand({ min: 955 }));
console.log(rand({}));

//Destruturing em parametro de função com array
/*
function rand([min= 0,max= 1000]) {
    if(min > max) [min,max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand(rand([50,40])));
console.log(rand([992]));
console.log(rand([,10]));
*/