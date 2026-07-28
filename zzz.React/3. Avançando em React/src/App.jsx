import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Data from '../components/Data'
import ListRender from '../components/ListRender'
import ConditionalRender from '../components/ConditionalRender'
import { ShowUserName } from '../components/ShowUserName'
import CarDetails from '../components/CarDetails'
import Fragment from '../components/Fragment'
import Container from '../components/Container'
import Message from '../components/Message'
import { useState } from 'react'


// 2) imagem em assets
// import "..." from ./assets/"..."


{/* 11) renderização de lista com componente */}
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 3200}
]

// 14) função em prop
import ExecuteFunction from '../components/ExecuteFunction'
import ChangeMessage from '../components/ChangeMessage'

function App() {
  const [count, setCount] = useState(0)

  // 14) função em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  // 15) state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => setMessage(msg)

  
  return (
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1) imagens em public => finge que pegou a imagem */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 2) imagem em assets */}
        <img src={"..."} alt="Outra imagem" /> {/* como se fosse variável */}

        {/* 3) useState */}
        <Data/>

        {/* 4) renderizando itens de lista */}
        <ListRender/>

        {/* 7) render condiconal */}
        <ConditionalRender/>

        {/* 8) props */}
        <ShowUserName name="Rafael"/>

        {/* 9) desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho"/>
        {/* q não é string vai em chaves */}

        

        {/* 10) reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={123444} color="Branco"/>
        <CarDetails color="Branco" brand="BMW" km={43784874}/>

        {/* 11) renderização de lista */}
        {cars.map((car) => (
          <CarDetails 
            key={car.id} 
            brand={car.brand} 
            color={car.color} 
            km={car.km}/>
        ))}

        {/* 12) fragment */}
        <Fragment/>

        {/* 13) children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>

        <Container>
          <div>
            <h2>Teste</h2>
            <p>Meu container</p>
          </div>
        </Container>

        {/* 14) função em prop */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* 15) state lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
  )
}

export default App
