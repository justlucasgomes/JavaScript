const meuNome = "Lucas";

//vejamos alguns métods úteis para strings
console.log(meuNome.charAt(4));//Retorna o caractere na posição (n)
console.log(meuNome.charAt(5));//no indice 5 nesse caso retorna valor vazio

console.log(meuNome.charCodeAt(3));//pegar valor na tabela unicode
console.log(meuNome.indexOf('a'));//mostra em qual indice esta a primeira letra 'a'

console.log(meuNome.substring(1));//mostra a string a partir do indice 1
console.log(meuNome.substring(0, 3));//mostra entre indice 0 e 3 mas sem o 3

console.log('Meu nome é '.concat(meuNome).concat('!')); //permite concater string a uma variavel e concater a outra string
console.log('Meu nome é ' + meuNome + '!'); //mesma coisa que acima concat
console.log(meuNome.replace('s', 'o')); //substitui 'x' por 'y'
console.log(meuNome.replace(/\w/g, 'e'));//troca toda string por 'e' usando regex


/*📌 Interpolação de Strings (template literals)
Quando usamos crases (``), podemos interpolar valores com ${}:
*/
const idade = 30;
console.log(`Meu nome é ${meuNome} e tenho ${idade} anos.`);
//✅ String é um tipo primitivo, mas tem métodos poderosos! 🚀
