// // 1) variáveis => armazenamento
// let nome = "Rafael"
// console.log(nome)

// nome = "Rafael Amaral"
// console.log(nome)

// const idade = 18
// console.log(idade)
// // let pode ser mudada; const é imutável

// // 2) mais sobre variáveis
// // let 2teste  = "inválido"
// // let @teste = "inválido"
// let a = 10,
//  b = 20,
//  c = 30
// console.log(a, b, c)
// // lembrando: as variáveis são CaseSensitive
// // ex: nomecompleto != nomeCompleto

// // 3) prompt => "input"
// const age = prompt("Digite sua idade: ")
// console.log(`Você tem ${age} anos.`)
// // pouco usual

// // 4) alert
// alert("Testando")

// const z = 10
// alert(`O número é ${z}`)
// // pouco usual

// // 5) Math
// console.log(Math.max(10, 5, 8))
// console.log(Math.floor(3.14))
// console.log(Math.ceil(3.14))

// // 6) console
// console.log("teste")
// console.error("Erro!")
// console.warn("Aviso!")

// 7) if
const m = 10

if(m > 5) {
    console.log("M é maior que 5!")
}

const user = "João"

if(user === "João"){
    console.log("Cadê a Maria?")
}

// 8) else
const loggedIn = false

if(loggedIn){
    console.log("Está autenticado!")
} else{
    console.log("Não está autenticado!")
}


const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log("Números mais altos!")
} else{
    console.log("Números mais baixos!")
}


// 9) else if
if(1 > 2){
    console.log("Teste")
} else if(2 > 3){
    console.log("Teste 2")
} else if( 5 > 1){
    console.log("Agora sim")
}

const userName = "Rafael"
const userAge = 18

if(userName === "José"){
    console.log("Bem vindo, José.")
} else if(userName === "Rafael" && userAge === 18){
    console.log("Olá, Rafael, você tem 18 anos!")
} else{
    console.log("Nenhuma condição aceita!")
}


// 10) while
let p = 0

while(p < 5) {
    console.log(`Repetindo ${p}`)
    p += 1
}
// há também os loops infinitos

// 11) do while => não muito usado
let o = 10

do{
    console.log(`Valor de ${o}`)
    o --
} while(o > 1)



// 12) for
for (let t = 0; t < 10; t++){
    console.log("Repetindo algo...")
}
// quando a mensagem não é alterada, ele não imprime linhas novas no console

for (let g = 10; g > 0; g--){
    console.log(`g está diminuindo: ${g}`)
}

// 13) identação
for (let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
} else{
    if(u / 2 === 0) {
        console.log("Deu 0")
    }
  }
}


// 14) break

for(let f = 20; f > 10; f--) {
    console.log(`O valor de f é: ${f}`)

    if (f === 14){
        console.log("f é 14")
        break
    }
}

// 15) continue => ignora um bloco do loop/código
for (let s = 0; s < 10; s++) {
    // operador resto: %
    if(s % 2 === 0){
        console.log("Número par!")
        continue
    }

    console.log(s)
}


// 16) switch
const job = "Advogado"

switch(job){
    case "Programador":
        console.log("Você é um programador")
        break
    case "Advogado":
        console.log("Você é um advogado")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break
    default:
        console.log("Profissão não encontrada")
}
// sempre colocar o break