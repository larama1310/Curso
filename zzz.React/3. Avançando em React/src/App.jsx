import { useState } from 'react'
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


// 2) imagem em assets
// import "..." from ./assets/"..."


{/* 11) renderização de lista com componente */}
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 3200}
]

function App() {
  const [count, setCount] = useState(0)

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
      </div>
  )
}

export default App
