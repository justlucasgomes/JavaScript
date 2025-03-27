const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]); //Acessa indices x e y
console.log(valores[4]); //Undefined em caso de indice inexistente


//Permite add elementos em x indice mesmo pulando indices vazios...
valores[10] = 10; 
console.log(valores);

//Quantos elementos temos no array
console.log(valores.length);

//Deleta elemento do indice (x)
delete valores[0];
console.log(valores);

console.log(typeof valores); //Array é do tipo (object)

//Adicionas elementos
valores.push("Carlos"); //Adiciona no final
valores.unshift("Ana"); //Adiciona no início

//Remover elementos
valores.pop(); //Remove do final
console.log(valores.pop()); //Exemplo de uso "pop" com mesma finalidade
valores.shift(); //Remove do inicio

//Verifica se é um array
console.log(Array.isArray(valores)); //true

//Percorre o Array
valores.forEach(valores => console.log(valores));