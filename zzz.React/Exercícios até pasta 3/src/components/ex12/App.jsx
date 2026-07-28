import React from 'react'
import ListRender from './ListRender'

const produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" },
  { id: 3, nome: "Teclado" }
]


const App = () => {
  return (
    <div>
        <ListRender array={produtos}/>
    </div>
  )
}

export default App