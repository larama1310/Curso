import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// 2) importando componente
import FirstComponent from './components/FirstComponent'
// 4) template expression
import TemplateExpressions from './components/TemplateExpressions'

// 5) hierarquia => possiblidade de criar componentes dentro de componentes, criando ramificações
import MyComponent from './components/MyComponent'

// 6) eventos
import Events from './components/Events'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* 3) comentários do jsx */}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
