// 1)
const parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}


// 2) 
const maiorNumero = (a, b) => {
    const arr = [a, b]
    // return arr.Math.max(...maiorNumero)
    let maior = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] > maior) {
            maior = arr[i]

    }
    }
    
    return maior
}


// 3) 
const media = (n1, n2, n3) => (n1 + n2 + n3) / 3


// 4) 
const aprovado = (media) => {
    if (media < 7) {
        return "Reprovado"
    } else {
        return "Aprovado"
    }
}

const nota = media(8, 7, 9)
console.assert.log(aprovado(nota))


// 5) 
const calcularDesconto = (valor) => {
    if (valor <= 100) {
        return valor * 0.95
    } else {
        return valor * 0.9
    }
}


// 6) 
const calcularArea = (base, altura) => base * altura

const mostrarResultado = (area) => area

const area = calcularArea(10, 5)
mostrarResultado(area)
