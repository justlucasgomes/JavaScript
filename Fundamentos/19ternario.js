//O operador ternário em JavaScript é uma forma compacta de realizar uma operação condicional, funcionando como um "if" de uma única linha. Ele avalia uma condição e retorna um valor se essa condição for verdadeira, ou outro valor se for falsa.

const idade1 = 20;
const mensagem = idade1 >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // "Maior de idade"

//Em JavaScript, você pode combinar arrow functions com o operador ternário para criar funções concisas que avaliam uma condição e retornam valores diferentes com base nessa avaliação

// Arrow function que usa o operador ternário para verificar a idade
const verificarIdade = idade => idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(verificarIdade(20)); // "Maior de idade"
console.log(verificarIdade(16)); // "Menor de idade"