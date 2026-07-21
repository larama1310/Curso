// html:

// <input id='n1'></input>
// <input id='n2'></input>

// <button id='soma'>Somar</button>

// <p id='resultado'></p>

const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const button = document.querySelector("#soma")
const p = document.querySelector("#resultado")

const somar = (a, b) => a + b

button.addEventListener("click", (e) => {
    if (n1.value === "" || n2.value === "") {
        return
    }
    
    const a = Number(n1.value)
    const b = Number(n2.value)
    
    
    const resultado = somar(a, b)

    p.textContent = resultado

    n1.value = ""
    n2.value = ""
    n1.focus()
})