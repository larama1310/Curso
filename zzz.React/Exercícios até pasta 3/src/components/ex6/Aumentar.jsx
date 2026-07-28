import React from 'react'

const Aumentar = ({n, setContador}) => {
    const somar = (n) => {
        setContador(n + 1)
    }

  return (
    <div>
        <button onClick={somar}>+</button>
    </div>
  )
}

export default Aumentar