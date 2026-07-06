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