import React, { useState } from 'react'
import Botao from './Botao'

const App = () => {

    const [numero, setNumero] = useState(0)
    const aumentar = () => {
        setNumero(numero + 1)
    }

  return (
    <div>
        <Visor numero={numero}/>
        <Botao clicar={aumentar}/>
    </div>
  )
}

export default App