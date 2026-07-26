import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <form>
        <label>Nome: </label>
        <input type="text" placeholder='Digite seu nome...'/>
      </form>
    </div>
  )
}

export default App
