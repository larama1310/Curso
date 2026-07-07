// 1) criando uma função
function minhaFuncao() {
    console.log("Testando")
}
minhaFuncao()

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável")
}
minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}
funcaoComParametro("Imprimindo alguma coisa")



// 2) return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2
}

const resultado = soma(a, b)
console.log(resultado)


// 3) escopo da função
let y = 10

function testandoEscopo(){
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}

testandoEscopo()
console.log(`Y fora da função é ${y}`)
// variáveis locais (da função) e globais (de fora da função)


// 4) escopo aninhado
let m = 10

function escopoAninhado(){
    let m = 20

    if(true) {
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado()

console.log(m)
// observe como há diferentes valores para cada escopo


// 5) arrow function
const testArrow = () => {
    console.log("Esta é uma arrow function")
}

testArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }

    console.log("Ímpar")
}

parOuImpar(5)
parOuImpar(10)

// 6) mais sobre arrow function
const aoQuadrado = (x) => {
    return x * x
}

console.log(aoQuadrado(4))

const aoQuadrado2 = (x) => x * x

console.log(aoQuadrado2(5))

const helloWorld = () => console.log("Hello World")

helloWorld()
// console.log em funções dá undefined pq a função já executou, logo, não tem o que mostrar


// 7) parâmetro opcional
const multiplication = function(m, n) {

    if(n === undefined) {
        return m * 2
    } else{
        return m * n
    }
}

console.log(multiplication(5))
console.log(multiplication(2, 4))


const greeting = (name) => {
    
    if(!name) {
        console.log("Olá!")
        return
    }

    console.log(`Olá, ${name}!`)
}

greeting()
greeting("Rafael")


// 8) argumento com valor default (argumento prévio)
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

// Olá é o argumento default, mas que pode ser alterado

console.log(customGreeting("João"))
console.log(customGreeting("Rafael", "Bom dia"))

const repeatText = (text, repeat = 2) => {

    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText("Testando")
repeatText("Quero 5 vezes", 5)


// 9) closure

function someFunction() {
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display()
}

someFunction()
// tipo uma função se aproveitando de outra

// 10) mais sobre closures
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(10)
console.log(c1)
console.log(c1(10))


// 11) recursão => autoinvoca => 'loop' => cuidado com loops infinitos
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else{
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

// ex de loop infinito:
// function run() {
//  console.log("Executando...")
//  run()
// }
// run()


function factorial(x) {
    if (x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}


const num = 6
const result = factorial(num)
console.log(`O fatorial de ${num} é ${result}`)
// console.log(factorial(6))