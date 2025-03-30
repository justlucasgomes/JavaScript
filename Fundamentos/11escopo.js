/*
Escopo Global e Escopo de Bloco em JavaScript
📌 Escopo Global:

Quando uma variável é declarada fora de qualquer função ou bloco {}, ela pertence ao escopo global.

Isso significa que pode ser acessada e modificada de qualquer lugar do código.

📌 Escopo de Bloco:

Criado dentro de {} (como em if, for, while, function, etc.).

let e const respeitam o escopo de bloco, ou seja, só existem dentro do bloco onde foram declaradas.

var não respeita o escopo de bloco e pode vazar para fora dele.
*/

var global = "Estou no escopo global";

function exemplo() {
    let bloco = "Estou dentro de um bloco";
    console.log(global); // ✅ Consegue acessar
    console.log(bloco);  // ✅ Consegue acessar
}

exemplo();
console.log(global); // ✅ Consegue acessar
// console.log(bloco); // ❌ Erro! "bloco" não existe fora da função

{
    var testeVar = "Var escapa do bloco";
    let testeLet = "Let fica preso no bloco";
}

console.log(testeVar); // ✅ Consegue acessar (porque `var` não respeita bloco)
// console.log(testeLet); // ❌ Erro! "testeLet" não existe fora do bloco


/*
Resumo Rápido:
✔ Variáveis var vazam do bloco
✔ Variáveis let e const ficam presas dentro do bloco
✔ Tudo que está no escopo global pode ser acessado de qualquer parte do código
*/