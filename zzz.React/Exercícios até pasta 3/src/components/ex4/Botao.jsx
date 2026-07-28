import React from 'react'

const Botao = () => {
    const botaoClicado = () => console.log("Botão clicado!")

  return (
    <div>
        <button onClick={botaoClicado}>Clique aqui</button>
    </div>
  )
}

export default Botao