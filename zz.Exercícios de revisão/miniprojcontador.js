const contador = document.querySelector("#contador")
const botaoMais = document.querySelector("#mais")
const botaoMenos = document.querySelector("#menos")
const botaoReset = document.querySelector("#reset")

const atualizarTela = (valor) => {
    contador.textContent = String(valor)
}

const somar = () => {
    const resultado = Number(contador.textContent) + 1

    return resultado
}

const subtrair = () => {
    if (Number(contador.textContent) <= 0) {
        botaoMenos.disabled = true 
        return
    }
    
    const resultado = Number(contador.textContent) - 1
    
    return resultado
}

const resetar = () => {
    const resultado = 0

    return resultado
}


botaoMais.addEventListener("click", (e) => {
    e.preventDefault()

    if (Number(contador.textContent) === 10) {
        botaoMais.disabled = true
        return
    }

    const novoValor = somar()
    atualizarTela(novoValor)
})

botaoMenos.addEventListener("click", (e) => {
    e.preventDefault()

    const novoValor = subtrair()
    atualizarTela(novoValor)
})

botaoReset.addEventListener("click", (e) => {
    e.preventDefault()

    const novoValor = resetar()
    atualizarTela(novoValor)
})

