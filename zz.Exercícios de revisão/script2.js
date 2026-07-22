// 1) 
const input = document.querySelector("#nome")
const button = document.querySelector("#btn")

button.addEventListener("click", (e) => {
    console.log(input.value)
})


// 2) 
const mostrarNome = (nome) => {
    console.log(`Olá, ${nome}`)
}

button.addEventListener("click", (e) => {
    mostrarNome(input.value)
})


// 3)
const input2 = document.querySelector("#numero")
const button2 = document.querySelector("#dobro")
const p = document.querySelector("#resultado")

const calcularDobro = (numero) => numero * 2

button2.addEventListener("click", (e) => {
    // const res = calcularDobro(input2) 
    const res = calcularDobro(Number(input2.value))
    p.textContent = res
})


// 4)
const input3 = document.querySelector("#texto")
const button3 = document.querySelector("#adicionar")
const lista = document.querySelector("#lista")

button3.addEventListener("click", (e) => {
    const li = document.createElement("li")
    li.textContent = input3.value // usuário digita: .value
    lista.appendChild(li) // usuário vê: .textContent
})



// 5) 
const inputInicio = document.querySelector("#inicio")
const inputFim = document.querySelector("#fim")
const btnGerar = document.querySelector("#gerar")
const numberList = document.querySelector("#numeros")

btnGerar.addEventListener("click", (e) => {
    const valorInicial = Number(inputInicio.value)
    const valorFinal = Number(inputFim.value) // tava sem Number

    numberList.innerHTML = "" // não tinha limpado a lista

    for (let i = valorInicial; i <= valorFinal; i++) {
        const number = document.createElement("li")
        number.textContent = i
        numberList.appendChild(number)
    }


})



// 6)
const criarItem = (texto) => {
    const item = document.createElement("li")
    
    item.textContent = texto
    
    return item
}

const adicionarNaLista = (item) => {
    // const ul => vai ser a lista em html
    ul.appendChild(item)
    
}

const novoItem = criarItem("Maçã")
adicionarNaLista(novoItem)