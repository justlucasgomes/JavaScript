//Useful methods of math
console.log(Math.PI); //Retorna valor de PI
console.log(Math.abs(-10)); //Retorna valor absoluto (10)
console.log(Math.pow(2, 3)); //Potencia: 2³ = 8
console.log(Math.sqrt(25)); //Raiz quadrada de 25 = 5
console.log(Math.min(3, 7, 1, 9)); // Retorna o menor número (1)
console.log(Math.max(3, 7, 1, 9)); // Retorna o maior número (9)
console.log(Math.random()); // Retorna um número aleatório entre 0 e 1
console.log(Math.floor(4.9)); //Arredonda para baixo (4)
console.log(Math.ceil(4.1)); //Arredonda para cima (5)
console.log(Math.round(4.5)); //Arredonda para o mais próximo (5)

const numeroAleatorio = Math.ceil(Math.random() * 10);
console.log(numeroAleatorio); // Número entre 1 e 10