const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    descricao: function(marca, modelo) {
        console.log(`${this.marca} ${this.modelo}`)
    }
}
carro.descricao()
// função não pertence ao objeto
// ex:
const outroCarro = {
    marca: "Honda",
    modelo: "Civic",
    descricao = carro.descricao

}
outroCarro.descricao()


// ------------------------------------------------------------


const animal = {
    patas: 4
}

const cachorro = Object.create(animal)
console.log(cachorro.patas)

// ------------------------------------------------------------

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const rafael = new Pessoa("Rafael", 19)
const joao = new Pessoa("João", 22)

// ------------------------------------------------------------

const veiculo = {
    rodas: 4
}

const carro = Object.create(veiculo)
carro.rodas = 6

// ------------------------------------------------------------
function Livro(titulo) {
    this.titulo = titulo
}

Livro.prototype.mostrarTitulo = function() {
    console.log(this.titulo)
}

const livro1 = new Livro("Dom Casmurro")
const livro2 = new Livro("1984")

livro1.mostrarTitulo() //Dom Casmurro
livro2.mostrarTitulo() //1984
// mostrarTitulo está em Livro.prototype

// ------------------------------------------------------------
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const chat = new Pessoa("Chat", 5)
const flavio = new Pessoa("Flávio", 30)

// ------------------------------------------------------------
class Aluno {
    constructor(nome, curso) {
        this.nome = nome
        this.curso = curso
    }

    apresentar() {
        console.log(`${this.nome}, ${this.curso}`)
    }
}

// ------------------------------------------------------------
class Produto {
    constructor(preco) {
        this.preco = preco
    }
    
    get exibirPreco() {
        console.log("Preço: R$100,00")
    }

    set precoValido(preco) {
        if (preco < 0) {
            console.log("Valor inválido")
            return false
        }
    }
}