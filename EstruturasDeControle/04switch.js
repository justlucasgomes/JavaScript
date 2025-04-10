//Permite testar um valor contra múltiplos casos. É útil quando há várias condições baseadas no mesmo valor.
const dia = "quarta";

switch (dia) {
  case "segunda":
    console.log("Início da semana");
    break;
  case "sexta":
    console.log("Final da semana");
    break;
  case "sábado":
  case "domingo":
    console.log("Fim de semana");
    break;
  default:
    console.log("Dia útil");
}
