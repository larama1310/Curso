// const produtoInput = document.querySelector("#produto")
// const btnAdicionar = document.querySelector("#adicionar")
// const listaDeProdutos = document.querySelector("#lista")
// const btnRemover = document.querySelector(".remover")


// const criarProduto = (nome) => {
//     const elemento = document.createElement("li")
    
//     elemento.textContent = nome.trim()
    
//     return elemento
    
// }

// const adicionarProduto = (item) => {
//     listaDeProdutos.appendChild(item)
// }

// const removerProduto = (item) => {
//     item.remove()
// }


// btnAdicionar.addEventListener("click", (e) => {
//     e.preventDefault()
    
//     if (produtoInput.value === "") {
//         return
//     } else if (produtoInput.value in listaDeProdutos) {
//         console.log("Produto já existe.")
//         return
//     }

//     const item = criarProduto(produtoInput.value)

//     adicionarProduto(item)

//     produtoInput.value = ""
//     produtoInput.focus()

//     listaDeProdutos.appendChild(btnRemover)

// })

// btnRemover.addEventListener("click", (e) => {
//     removerProduto(produtoInput.value)
// })
const produtoInput = document.querySelector("#produto")
const btnAdicionar = document.querySelector("#adicionar")
const listaDeProdutos = document.querySelector("#lista")

const criarProduto = (nome) => {
    const item = document.createElement("li")

    item.textContent = nome

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "Remover"

    btnRemover.addEventListener("click", () => {
        removerProduto(item)
    })

    item.appendChild(btnRemover)

    return item
}

const adicionarProduto = (item) => {
    listaDeProdutos.appendChild(item)
}

const removerProduto = (item) => {
    item.remove()
}

btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault()

    const nome = produtoInput.value.trim()

    if (nome === "") {
        return
    }

    const itens = listaDeProdutos.querySelectorAll("li")

    for (const item of itens) {
        // O botão "Remover" também faz parte do textContent,
        // então usamos includes() para comparar apenas o início.
        if (item.textContent.includes(nome)) {
            console.log("Produto já existe.")
            return
        }
    }

    const novoProduto = criarProduto(nome)

    adicionarProduto(novoProduto)

    produtoInput.value = ""
    produtoInput.focus()
})