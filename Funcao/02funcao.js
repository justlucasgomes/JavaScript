//Cuidados com função!
//Para explicar por que console.log(area(5, 5)) imprime undefined, é importante entender que, em JavaScript, se uma função não retorna explicitamente um valor, ela retorna undefined por padrão.

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
       console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
       return area
    }
 }
 
 console.log(area(2,2)) 
 console.log(area(2)) 
 console.log(area()) 
 console.log(area(2, 3, 17, 22, 44)) 
 console.log(area(5, 5))

 /*
 Quando chamamos area(5, 5):

O cálculo é 5 * 5, que resulta em 25.

Como 25 > 20, o bloco if é executado, e a mensagem "Valor acima do permitido: 25m2." é impressa.

Mas não há return dentro desse if, ou seja, não há instrução que devolva um valor nesse caminho. Portanto, a função retorna undefined.

Você pode ensinar isso aos colegas explicando que:

Em funções, cada caminho de execução (cada ramo de um if/else, por exemplo) deve ter um return se queremos um valor consistente.

Quando a condição do if é verdadeira e não há return, o fluxo sai da função sem um valor retornado, e o JavaScript automaticamente atribui undefined.
 */