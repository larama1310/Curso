import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)

  return (
    <div>
        <h1>{contador}</h1>
        <button onClick={setContador(contador + 1)}>Somar</button>
    </div>
  )
}

export default Contador