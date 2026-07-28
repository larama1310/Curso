import React, { useState } from 'react'
import Aumentar from './Aumentar'
import Diminuir from './Diminuir'

const App = () => {
    const [contador, setContador] = useState(0)

  return (
    <div>
        <h1>{contador}</h1>
        <Aumentar n={contador} setContador={setContador}/>
        <Diminuir n={contador} setContador={setContador}/>
    </div>

  )
}

export default App