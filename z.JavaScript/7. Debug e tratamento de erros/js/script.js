// 1) Strict mode
"use strict"

// opa = "teste" // sem o strict daria certo

const opa = "teste"

// const undefined = 10 // com strict dá erro
// delete [].length

// 2) depurando com console.log
let a = 1
let b = 2

if(a === 1) {
    a = b + 2
}
console.log(a)

for(let i = 0; i < b; i++) {
    a += 2
    console.log(a)
}

if(a > 5) {
    a = 25
}
console.log(a)
// serve pra ver como está o fluxo do programa

// 3) debugger
let c = 1
let d = 2

if( c === 1) {
    d += 2
}

// debugger

for(let i = 0; i < d; i++) {
    c += 2
}

console.log("executou o loop")

// debugger

if (c > 5) {
    c = 25
}

// permite ver as variáveis em tempo real => só segue o código sob comando do programador
// tipo um console.log "manual" => mais robusto

// 4) tratamento de dados
function checkNumber(n) {

    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Valor incorreto")
        return
    }

    console.log("Valor correto")
    return result
}

checkNumber(5)
checkNumber("10") //consegue converter esse texto em número
checkNumber("teste")
checkNumber({})

// 5) exception
let x = 10

if (x !== 11) {
    // throw new Error("O valor de x não poder ser diferente de 10.")
}

// 6) try catch
try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`)
}
// não para o programa, mas notifica sobre o erro

// 7) finally
try {
    const value = checkNumber("asd")

    if(!value) {
        throw new Error("Valores inválidos")
    }
} catch(error) {
    console.log(`Aconteceu um problema: ${error}`)
} finally {
    console.log("O código foi executado")
}

// 8) assertions
function checkarray(arr) {
    if (arr.length === 0) {
        throw new Error("O array precisa ter elementos")
    } else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

// checkarray([])
checkarray([1, 2, 3])