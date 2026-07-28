import React from 'react'

const Diminuir = ({n, setContador}) => {
    const subtrair = (n) => {
        setContador(n - 1)
    }

  return (
    <div>
        <button onClick={subtrair}>-</button>
    </div>
  )
}

export default Diminuir