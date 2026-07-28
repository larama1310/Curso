import React from 'react'

const Pessoa = ({nome, idade}) => {
  return (
    <div>
        <h2>Nome: {nome}</h2>
        <h2>Idade: {idade}</h2>
    </div>
  )
}

export default Pessoa