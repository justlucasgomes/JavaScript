const pessoa = {
    nome: "Lucas",
    sobrenome: "Alves Gomes",
    profissao: "Desenvolvedor",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`
    }
};

console.log(pessoa.nome); //Acessando uma propriedade
console.log(pessoa.sobrenome);
console.log(pessoa["idade"]); //Outra forma de acesso
console.log(pessoa.saudacao()); //chama o método

//Adicionando e Removendo Propriedades
pessoa.altura = 1.78; //Adicionando nova propriedade
delete pessoa.profissao; //Removendo uma propriedade
console.log(pessoa);

//Criando Objetos com new Object()
const carro = new Object();
carro.marca = "Volkswagen";
carro.modelo = "T-Cross";
carro.ano = 2024;
console.log(carro);

//Objetos Aninhados (Objeto pode conter outros Objetos)
const usuario = {
    nome: "Amanda",
    endereco: {
        cidade: "Curitiba",
        estado: "PR"
    }
};
console.log(usuario.endereco.cidade); //"Curitiba"

//Percorrendo um Objeto
for (let chave in pessoa) {
    console.log (`${chave}: ${pessoa[chave]}`);
}