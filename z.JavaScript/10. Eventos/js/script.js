// 1) adicionando eventos

const btn = document.querySelector("#mybutton")

btn.addEventListener("click", function() {
    console.log("Clicou aqui!")
})

// 2) removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#otherbtn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3) argumento do evento
const myTitle = document.querySelector("#mytitle")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    // console.log(event.srcElement)
    // console.log(event.offsetX)
    // console.log(event.pointerType)
    console.log(event.target)
})

// 4) propagação
const containerBtn = document.querySelector("btncontainer")
const btnInsideContainer = document.querySelector("divbtn")

// containerBtn.addEventListener("click", () => {
//     console.log("Evento 1")
// })

// btnInsideContainer.addEventListener("click", () => {
//     console.log("Evento 2")
// }) // esse dispara os dois eventos => propagação

// btnInsideContainer.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("Evento 2")
//}) // assim não dispara os dois

// 5) removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Não alterou a página")
})

// 6) eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

// 7) outros eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

// 8) movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo x: ${e.x}`)
    console.log(`No eixo y: ${e.y}`)
})