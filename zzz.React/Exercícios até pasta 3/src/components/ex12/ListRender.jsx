import React from 'react'

const ListRender = ({array}) => {
  return (
    <div>
        <ul>
            {array.map((item) => (
                <li key={item.id}>{item.nome}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default ListRender