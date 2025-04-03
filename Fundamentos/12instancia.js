/*Essa distinção é importante para compreender como o JavaScript trata funções construtoras e as instâncias que elas criam. */

console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto());

/* instanciar uma classe significa criar um objeto específico que segue a estrutura e o comportamento definidos por essa classe, permitindo manipular dados de maneira eficiente e organizada. ​
*/