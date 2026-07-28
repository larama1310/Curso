import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Rafael", "Maria", "Sebastião"])

    const [users, setUsers] = useState([
        {id: 1, name: "Rafael", age: 18},
        {id: 2, name: "Pedro", age: 27},
        {id: 3, name: "João", age: 31}
    ])

  return (
    <div>
        {/* 4) render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))} 
            {/* não usar colchetes, e sim chaves */}
        </ul>
        {/* 5) render com key (mellhor) */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender