//Semelhante ao while, mas garante que o bloco seja executado pelo menos uma vez, pois a condição é verificada após a execução do bloco.
let numero = 0;
do {
  console.log("Número:", numero);
  numero++;
} while (numero < 5);

// Neste exemplo, o bloco dentro do do...while será executado uma vez, mesmo que a condição seja falsa desde o início. Isso é útil quando você precisa garantir que o bloco seja executado pelo menos uma vez, como em casos de validação de entrada do usuário ou inicialização de variáveis.