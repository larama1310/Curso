import React from 'react'
import RenderList from './RenderList'

const frutas = ["Maçã", "Banana", "Uva", "Laranja"]

const App = () => {
  return (
    <div>
        <ul>
            {frutas.map((fruta) => (
                <li>{fruta}</li>
            ))}
        </ul>
    </div>
  )
}

export default App