// 1) arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const itens = ["Rafael", true, 2, 3.14, []]
console.log(itens)

// 2) mais sobre arrays
const arr = ["a", "b", "c", "d", "e"]
console.log(arr[0])
console.log(arr.indexOf("c"))

// 3) propriedades
const numbers = [5, 3, 4]

console.log(numbers.length)

const myName = "Rafael"
console.log(myName.length)

// 4) métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)
// concatenação de listas

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)
console.log(text.indexOf("g"))
// alguns métodos com strings


// 5) objetos

const person = {
    name: "Rafael",
    age: 18,
    job: "Estudante"
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6) criando e deletando prorpiedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}
console.log(car)

car.doors = 4
console.log(car)

delete car.km
console.log(car)

// 7) mais sobre objetos
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
// (modificado, original) => (quem ganhou, quem passou)
console.log(obj2)

// 8) conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car))

// 9) mutação
const a = {
    name: "Rafael"
}

const b = a

console.log(a)
console.log(b)
console.log(a===b)

a.age = 18

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)
// repare que o que acontece em um, acontece no outro, independente da ordem


// 10) loops em arrays
const users = ["Rafael", "João", "Flávio", "Miguel"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11) arrays: push e pop
const array = ["a", "b", "c"]
array.push("d")
console.log(array)
console.log(array.length)

array.pop()
console.log(array)

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

array.push("x", "y", "z")
console.log(array)


// 12) shift e unshift => contrário de push e pop
// shift => remove o primeiro elemento
// unshift => adiciona elementos no início

const letters = ["a", "b", "c"]
const letter = letters.shift()
console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")
console.log(letters)

// 13) indexOf e lastIndexOf
const myEement = ["morango", "maçã", "banana", "pera", "maçã"]

console.log(myEement.indexOf("maçã"))
console.log(myEement.indexOf("banana"))
console.log(myEement.lastIndexOf("maçã"))
console.log(myEement[myEement.indexOf("morango")])
// para elementos inexistentes, o retorno do índice é menos 1

// 14) slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4)
console.log(subArray)
// o último elemento não entra: intervalo semi-aberto
console.log(testeSlice.slice(2))

// 15) forEach => semelhante ao for
const nums = [1, 2, 3, 4]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Java"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
})



// 16) includes
const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))
console.log(brands.includes("KIA"))

if(brands.includes("BMW")){
    console.log("Há carros da marca BMW")
}

// 17) reverse => inverte a lista e salva isso na variável
const reverseTest = [1, 2, 3, 4, 5]
reverseTest.reverse()
console.log(reverseTest)


// 18) trim => remove espaços e caracteres especiais => tratamento de dados
const trimTest = " testando \n  "
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)

// 19) padStart e padEnd
const testePadStart = "1"
const newNumber = testePadStart.padStart(4, "0")
console.log(testePadStart)
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0")
console.log(testePadEnd)
// (número de carateres que a string vai ter, qual caractere inserir)

// 20) split => converte string em lista
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")
console.log(arrayDaFrase)
// argumento do método é qual intervalo usado para separar

// 21) join => converte lista em string
const fraseDeNovo = arrayDaFrase.join(" ")
console.log(fraseDeNovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`
console.log(fraseDeCompra)

// 22) repeat 
const palavra = "Testando "
console.log(palavra.repeat(5))


// 23) rest operator (...) => argumentos indefinidos
const somaInfinita = (...args) => {
    let total = 0

    for (let i = 0; i < args.length; i++){

        total += args[i]
    }

    return total
    // atenção nesse loop! tem que entender
}

console.log(somaInfinita(1, 2, 3))
console.log(somaInfinita(1, 20, 34, 57, 89, 100))

// 24) for of => comparar com exxemplo acima
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita2(1, 100, 546, 67))

// 25) destructuring em objetos
const userDetails = {
    firstName: "Rafael",
    lastName: "Amaral",
    job: "Estudante"
}

const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)

// renomear variáveis
const {firstName: primeiroNome} = userDetails
console.log(primeiroNome)

// exemplo de fixação
const atributes = {
    strongFoot: "Direito",
    position: "Volante",
    skill: "Lançamento"
}

const {position: posicao} = atributes
console.log(posicao)
console.log(atributes.position)

// 26) destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList
console.log(veiculoA, veiculoB, veiculoC)


// 27) json (javascript object notation)
const myJSON = '{"name": "Rafael", "age": 18, "skills": ["PHP", "JavaScript", "Python"]}'

console.log(myJSON)
// ainda está como string => precisa de conversão

// 28) JSON para objeto e objeto para JSON
 const myObject = JSON.parse(myJSON)
 console.log(myObject)

const {name: nome} = myObject
console.log(nome)

// json inválido
// const badJSON = '{"name": Rafael, "age": 18}'
// const myBadObject = JSON.parse(badJSON)
// Rafael está sem aspas
// geralmente, esse erro vem do backend

myObject.isOpenToWork = true
console.log(myObject)

const myNewJSON = JSON.stringify(myObject)
console.log(myNewJSON)