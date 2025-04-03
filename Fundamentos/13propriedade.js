/*
Propriedades: 
    Que consistem em pares chave-valor. A chave é o identificador que nomeia a propriedade, e o valor é o dado atribuído a essa chave. Essa estrutura é fundamental para a manipulação e organização de dados na linguagem.
*/
//par chave-valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = "Falaaa"; // contexto léxico 2
    return saudacao;
};

// Objetos são grupos aninhados de pares nome/valor.
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);