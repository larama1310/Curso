import React from 'react'

const mostrarMensagem = () => {
    console.log("Você clicou!")
}

const Ap = () => {
  return (
    <div>
        <Botao clicar={mostrarMensagem}/>
    </div>
  )
}

export default Ap