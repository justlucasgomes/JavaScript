//continue
//Pula a iteração atual e continua para a próxima.
//Usado para pular uma iteração específica em um loop, mas continuar a execução do loop. Pode ser usado em loops for e while.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue; // Pula números pares
    }
    console.log("Número ímpar:", i);
  }
// Neste exemplo, o loop for imprime apenas os números ímpares de 1 a 9. Quando i é par, o comando continue pula a iteração atual e passa para a próxima.
// Isso é útil quando você deseja ignorar certos valores ou condições sem interromper completamente o loop.
