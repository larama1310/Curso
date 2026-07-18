// 1) movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2) selecionando por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 3) selecionando por id
const title = document.getElementById("title")

console.log(title)

// 4) selecionando por classe
const products = document.getElementsByClassName("product")

console.log(products)

// 5) selecionando por css
const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

// 6) insertBefore
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title) //coloca o parágrafo antes do título

// 7) appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8) replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título" //esse usa mais que textNode

header.replaceChild(h2, title) //troca o título original pelo novo

// 9) createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// 10) trabalhando com atributos
const firstLink = navLinks.querySelector("a") //esse método só pega o primeiro elemento

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")
// atributo href tem valor do link aí

console.log(firstLink.getAttribute("href")) // mostra o link

firstLink.setAttribute("target", "_blank") // faz abrir em nova aba

// 11) altura e largura
const footer = document.querySelector("fotter")

// console.log(footer.offsetWidth)
// console.log(footer.offsetHeight) // verifica as dimensões totais
// clientWidth e clientHeight considera só o que tá dentro da borda

// 12) posição do elemento
const product1 = products[0]

console.log(product1.getBoundingClientRect())
// rect tem várias propriedades do elemento, como coordenadas,
// distância das margens da tela até o elemento

// 13) CSS com js
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 14) alterando estilos de vários elementos
for(const li of listItens) {
    li.style.backgroundColor = "red"
}