import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Rafael", "Maria", "Sebastião"])

    const [users, setUsers] = useState([
        {id: 1, name: "Rafael", age: 18},
        {id: 2, name: "Pedro", age: 27},
        {id: 3, name: "João", age: 31}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <div>
        {/* 4) render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))} 
            {/* não usar colchetes, e sim chaves */}
        </ul>
        {/* 5) render com key (melhor) */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>

        {/* 6) previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender