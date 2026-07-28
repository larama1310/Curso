import React from 'react'
import Card from './Card'

const ListaDeProdutos = () => {

    const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 120 },
    { id: 3, nome: "Teclado", preco: 250 }
    ]

  return (
    <div>
        {produtos.map((produto) => (
            <Card key={produto.id}>
                <h2 >{produto.nome}</h2>
                <p>{produto.preco}</p>
            </Card>
        ))}
    </div>
  )
}

export default ListaDeProdutos