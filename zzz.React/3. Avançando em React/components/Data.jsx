import { useState } from 'react'
import React from 'react'

const Data = () => {
    let someData = 10
    // desse jeito, a mudança não é renderizada

    const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button> 
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => (setAnotherNumber(20))}>Mudar state</button>
        </div>
    </div>
  )
}

export default Data