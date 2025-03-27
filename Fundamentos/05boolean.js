/*🔥 Booleans em JavaScript

//✅ Booleans são essenciais para controle de fluxo em JavaScript! 🚀

O tipo boolean em JavaScript representa dois valores:
✅ true (verdadeiro)
❌ false (falso)*/

//📌 Exemplo básico

let ligado = true;
let desligado = false;

/*console.log(ligado);  // true
console.log(desligado); // false
🔥 Operadores de Comparação
Booleans geralmente surgem de comparações:*/

console.log(10 > 5);   // true
console.log(3 < 2);    // false
console.log(5 == '5'); // true (compara valores, ignora tipo)
console.log(5 === '5'); // false (compara valores e tipos)
console.log(10 !== 10); // false (10 não é diferente de 10)
console.log(10 !== "10"); // true (tipos são diferentes)

/*🔥 Valores que são considerados true ou false
Em JavaScript, algumas coisas parecem verdadeiras ou falsas mesmo sem serem true ou false.*/

//📌 Valores que são considerados false (Falsy):
//0
//"" (string vazia)
//null
//undefined
//NaN (Not a Number)

//Tudo que não está nessa lista é considerado true (Truthy).
//todos numeros reais são verdadeiros
console.log(Boolean("Lucas")); // true
console.log(Boolean(123)); // true
console.log(Boolean([])); // true (arrays vazios são truthy!)
console.log(Boolean({})); // true (objetos vazios também são truthy!)

/*🔥 Operadores Lógicos
✅ AND (&&) → Retorna true se ambos os valores forem true.
✅ OR (||) → Retorna true se pelo menos um dos valores for true.
✅ NOT (!) → Inverte o valor booleano.
✅ DOUBLE NAGATION (!!) →  é um jeito rápido de converter qualquer valor em true ou false, baseado se ele é truthy ou falsy.*/

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true

//📌 Exemplo prático
let idade = 18;
let temCarteira = true;

let podeDirigir = idade >= 18 && temCarteira; 

console.log(podeDirigir); // true