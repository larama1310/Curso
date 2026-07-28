import React from 'react'

const Desafio = () => {

    const [sorrindo, setSorrindo] = useState(true)
    const alterarHumor = () => {
        setSorrindo(!sorrindo)
    }

  return (
    <div>
        <h1>{sorrindo ? "😀" : "😎"}</h1>
        <button onClick={alterarHumor}>Trocar humor</button>
    </div>
  )
}

export default Desafio
