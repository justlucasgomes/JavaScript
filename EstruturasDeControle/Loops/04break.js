//break
//Interrompe o loop
//Usado para sair de um loop antes que a condição de término seja atendida. Pode ser usado em loops for, while e switch.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Interrompe o loop quando i é igual a 5
    }
    console.log("Valor:", i);
  };
// Neste exemplo, o loop for imprime os valores de 0 a 4. Quando i atinge 5, o comando break interrompe o loop, e a execução continua após o loop.