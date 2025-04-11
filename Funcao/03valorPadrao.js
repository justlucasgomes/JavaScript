/*
Em JavaScript, você pode definir valores padrão para parâmetros de funções para que, se nenhum valor for passado ou se o valor for undefined, o parâmetro receba automaticamente esse valor padrão. Esse recurso foi introduzido no ES6 e facilita a escrita de funções mais robustas e com menos verificações.
*/

function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
  }
  
  console.log(saudacao("Lucas"));   // Saída: "Olá, Lucas!"
  console.log(saudacao());          // Saída: "Olá, Visitante!"
  

  //No exemplo acima, se nenhum nome for passado, a função utiliza o valor "Visitante" como padrão.