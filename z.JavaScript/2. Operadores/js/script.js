// 1) number
console.log(2);
console.log(typeof 2);
console.log(typeof 3.14);
console.log(typeof -5);

// 2) operações matemáticas
console.log(2 + 4);
console.log(7-2);
console.log(3 * 4);
console.log(8 / 2);
console.log(5 * (4 + 2))

// 3) special numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof 5 * true)
console.log(typeof NaN)

// 4) strings

console.log("um texto")
console.log('mais um texto')
console.log("12")
console.log(typeof "12")

// 5) símbolos especiais em strings
console.log("Testando a \nquebra de linha")
console.log("Espaçamento \tde tab")

// 6) concatenação
console.log("Oi," + " tudo" + " bem?")
// lembrando: pode ser feito com crase e aspas simples

// 7) interpolação (Template Strings) => feita entre crases
// já executa javascript
console.log(`A soma de 2 + 2 é: ${2 + 2}`)

// 8) booleanos => true ou false
console.log(true)
console.log(5 > 20)

// 9) comparações
// >, <, ==, !=, ===
// '===' é idêntico => checa o tipo de dado
console.log(10 == '10') 
// vai ser true => não diferencia number de string
console.log(10 === "10")
// vai dar false => number != string
// prioridade é ===

// 10)operadores lógicos
// && => and => dois true
// || => or => apenas um true
// ! => not => inverte a comparação
// lembra do macete: false = 0, true = 1 => tabela verdade

console.log(true && true)
console.log(true && false)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 || "Rafael" === 1)
console.log(! ("Rafael" === 1))

// 11) empty values
console.log(typeof null, typeof undefined)

// 12) mudança de tipos
console.log(5 * null)
console.log("teste" * "opa")
console.log("10" + 1)