import React, { useState } from 'react'

const Ligado = () => {

    const [ligado, setLigado] = useState(false)
    const alternarHumor = () => {
        setLigado(!ligado)
    }

  return (
    <div>
        <h1>Ligado? {ligado ? "Ligado" : "Desligado"}</h1>
        <button onClick={alternarHumor}>
            Alternar
        </button>
    </div>
  )
}

export default Ligado