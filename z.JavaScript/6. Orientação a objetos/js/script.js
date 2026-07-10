// 1) métodos => "propriedades com funções"
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
}

console.log(animal.nome)
animal.latir()
// chamo a função, que também é propriedade => método


// 2) mais sobre métodos
const pessoa = {
    
    nome: "Rafael",
    
    getNome: function() {
        return this.nome
    },
    
    setNome: function (novoNome) {
        this.nome = novoNome
    }

}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Bartolomeu")
console.log(pessoa.getNome())
// observe que há duas funções que também são propriedades de um objeto!


// 3) prototype => "herança" => todo dado tem um pai ("protótipo") => se você é desse tipo, logo, é tratado como esse tipo
const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(Object.getPrototypeOf(arr))
console.log(Object.getPrototypeOf(arr) === Array.prototype)

// 4) mais sobre prototype
const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject)
console.log(mySecondObject)
console.log(mySecondObject.a)
// exatamente a mesma coisa que length, por exemplo
console.log(Object.getPrototypeOf(mySecondObject) === myObject)


// 5) classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"
// não substitui a do protótipo, mas "passa na frente"
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog"
console.log(bulldog)


// 6) função como classe => função construtora

function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira-lata")
console.log(bob)

const tom = criarCachorro("Tom", "Poodle")
console.log(tom)

console.log(Object.getPrototypeOf(tom))


// 7) funções como classe
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky)


// 8) métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu!")
}

console.log(Cachorro)
console.log(Cachorro.prototype)

husky.uivar()


// 9) classes es6 => mais comum hoje
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")
console.log(jeff)

// 10) mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")
console.log(scania)

scania.descreverCaminhao()
// adições somente via prototype


// 11) override
class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const flavio = new Humano("Flávio", 33)
console.log(flavio)

Humano.prototype.idade = "Não definida"
console.log(Humano.prototype.idade)

console.log(flavio.idade)
// não alterada pelo prototype

// 12) symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = "Piloto e Co-piloto"

const boeing = new Aviao("Boeing", 10)
console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])


// 13) getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você está lendo ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")
console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, javascript, js"
console.log(myPost)

// 14) herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")

console.log(shark)
console.log(shark.patas)

// 15) instanceof
console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "Teste") instanceof Mamifero)
// ele não olha pra classe, mas sim pra cadeia de protótipos
