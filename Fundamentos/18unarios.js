//Em JavaScript, os operadores unários são aqueles que atuam em um único operando, realizando operações ou transformações sobre ele. Alguns exemplos comuns são:

//typeof: Retorna uma string indicando o tipo do operando.
let x = 42;
console.log(typeof x); // "number"

//delete: Remove uma propriedade de um objeto.
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

//Operador unário +: Converte o operando para número.
let str = "123";
console.log(+str); // 123 (número)

//Operador unário -: Converte o operando para número e inverte seu sinal.
let num = "123";
console.log(-num); // -123

//Operador lógico de negação (!): Inverte o valor booleano do operando.
console.log(!true); // false

//Incremento (++) e decremento (--): Aumentam ou diminuem o valor do operando em 1, podendo ser usados em forma prefixada ou posfixada.
let contador = 5;
contador++;
console.log(contador); // 6

//Esses operadores são úteis para realizar transformações, verificações e modificações de valores de forma concisa e eficiente.