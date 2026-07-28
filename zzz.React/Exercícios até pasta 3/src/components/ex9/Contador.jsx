import React, { useState } from 'react'


const Contador = ({valorInicial}) => {

    const [contador, setContador] = useState(valorInicial)
    const somar = () => {
        setContador(valorInicial + 1)
    }

  return (
    <div>
        <h1>{valorInicial}</h1>
        <button onClick={somar}>+</button>
    </div>
  )
}

export default Contador