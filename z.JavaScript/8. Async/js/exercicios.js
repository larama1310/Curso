console.log("Preparando pedido...")

setTimeout(() => {
    console.log("Pedido pronto!")
}, 3000)

// ------------------------------------------------------------
let contagem = 1

let intervalo = setInterval(() => {
    console.log(`Contagem: ${contagem}`)
    contagem++
    if(contagem > 5) {
        clearInterval(intervalo)}
}, 1000)

// ------------------------------------------------------------
const promessa = Promise.resolve(50)

promessa.then((value) => {
    return value + 10}) //promessa.then((value) => value + 10)

.then((value) => {
    return value / 2 // .then((value) => value / 2)
})

.then((value) => {
    console.log(`O valor é ${value}`)
})
// ------------------------------------------------------------
const verificarSaldo = (saldo) => {
    return new Promise((resolve, reject) => {
        if(saldo >= 100) {
            resolve("O saldo é maior ou igual a 100!")
        } else{
            reject(new Error("O saldo é menor que 100!"))
        }
    })
}

const a = verificarSaldo(20)
const b = verificarSaldo(120)

a.then((value) => console.log(`O resultado é ${value}`)).catch(error) //=> console.log(`Um erro ocorreu: ${error}`) 

// ------------------------------------------------------------
Promise.resolve("abc")
     .then((n) => {
         if(Number.isNaN(n)) {
            throw new Error("Valores inválidos")
    }
     })
 //   .catch(err) => console.log(`Um erro ocorreu: ${err}`)

// ------------------------------------------------------------
const p1 = Promise.resolve("HTML")
const p2 = Promise.resolve("CSS")
const p3 = Promise.resolve("Javascript")

Promise.all([p1, p2, p3])
    .then((values) => console.log(values))

// ------------------------------------------------------------
const criarPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("essa promise demora 3 segundos")
        
            if(true) {
            resolve('Foi')
            } else {
            reject(new Error("não foi"))
            }}, 3000)
        })
}


// ------------------------------------------------------------
const carregarDados = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) { //suponha que os dados tenham sido carregados
                resolve("Dados carregados!")
            } else {
                reject(new Error("Dados não encontrados!"))
            }
        }, 2000)
    })
}

async function encontrado() {
    console.log("Iniciando...")
    const carregado = await carregarDados()
    console.log(`Resultado: ${carregado}`)
}

encontrado()

// ------------------------------------------------------------
class Usuario {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const rafael = new Usuario("Rafael", 19)

const buscarUsuario = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rafael)
        }, 2000)
    })
}

async function mostrarUsuario() {
    const encontrado = await buscarUsuario()
    console.log(encontrado)
}

mostrarUsuario()

// ------------------------------------------------------------
const fazerLogin = (usuario, senha) => {
    return new Promise((resolve, reject) => {
        if(usuario === "admin" && senha === "1234") {
            resolve("Login realizado")
        } else {
            reject(new Error("Usuário ou senha inválidos!"))
        }
    })
}

async function verificarLogin() {
    try {
        const verificado = await fazerLogin("admin", "1234")
        console.log(verificado)
    } catch(error) {
        console.log(error)}
}

verificarLogin()