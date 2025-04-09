//Em JavaScript, o tratamento de erros com try/catch/throw permite que você capture e lide com exceções de forma controlada, evitando que erros interrompam inesperadamente a execução do seu código. Veja como funciona:

function validarNumero(num) {
    if (typeof num !== 'number') {
      // Lança um erro se o argumento não for do tipo número
      throw new Error("O argumento deve ser um número");
    }
    return num * 2;
  }
  
  try {
    // Tenta executar o código abaixo
    const resultado = validarNumero("a"); // Isso irá lançar um erro
    console.log(resultado);
  } catch (erro) {
    // Captura e trata o erro
    console.log("Ocorreu um erro:", erro.message);
  } finally {
    // Esse bloco é executado independentemente de erros
    console.log("Execução finalizada.");
  }
  
/*
try:
Coloque dentro do bloco try o código que pode gerar um erro. Se um erro ocorrer, o fluxo de execução é imediatamente desviado para o bloco catch.

catch:
Quando ocorre um erro no bloco try, o catch é acionado. Ele recebe um parâmetro (geralmente chamado de erro ou e) que contém informações sobre a exceção, permitindo que você trate ou registre o erro.

finally (opcional):
O bloco finally é executado sempre, independente de um erro ter ocorrido ou não. Ele é útil para liberar recursos ou executar ações que devem ocorrer em qualquer situação.

throw:
Você pode usar o throw para lançar manualmente um erro, criando uma exceção customizada. Isso é útil para validar dados ou condições específicas, interrompendo a execução se algo não estiver conforme o esperado.
*/

