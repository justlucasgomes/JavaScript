//Em JavaScript, o valor de this depende de como e onde a função é chamada, e é uma fonte comum de confusão. Aqui estão os pontos principais:

/*No Escopo Global (Browser):
Quando você está no contexto global do navegador (fora de qualquer função ou objeto), this aponta para o objeto global, que no navegador é o window. Assim, this === window retorna true.*/

//Em Funções Comuns:
//Se uma função é chamada no escopo global (sem ser método de um objeto) e sem estar em modo estrito, o valor de this dentro da função será o objeto global (window).
function exibir() {
  console.log(this);
}
exibir(); // No navegador, exibe o objeto window.

//Em Métodos de Objetos:
//Quando uma função é chamada como um método de um objeto, o valor de this aponta para o objeto que contém o método.
const pessoa = {
  nome: "Lucas",
  mostrarNome() {
    console.log(this.nome);
  }
};
pessoa.mostrarNome(); // "Lucas" – aqui, this refere-se a pessoa.

//Em Funções Construtoras:
//Ao usar o operador new para criar uma instância, o this dentro da função construtora aponta para o novo objeto criado.
function Carro(modelo) {
  this.modelo = modelo;
}
const meuCarro = new Carro("Fusca");
console.log(meuCarro.modelo); // "Fusca"

//Em Arrow Functions:
//As arrow functions não possuem seu próprio this; elas herdam o valor de this do escopo onde foram definidas (contexto léxico). Isso ajuda a evitar problemas comuns relacionados à mudança de contexto.
const obj = {
  valor: 10,
  mostrarValor() {
    setTimeout(() => {
      console.log(this.valor); // this refere-se a obj, graças ao escopo léxico.
    }, 1000);
  }
};
obj.mostrarValor(); // Imprime 10 após 1 segundo.

//Resumindo:

//Globalmente: this aponta para window (no navegador).
//Métodos de objetos: this aponta para o objeto que chama o método.
//Funções construtoras: this aponta para a nova instância criada.
//Arrow functions: this é herdado do contexto onde a função foi criada.

//Essa variabilidade é o que torna o this tão poderoso, mas também pode ser fonte de confusão se não for bem compreendido.