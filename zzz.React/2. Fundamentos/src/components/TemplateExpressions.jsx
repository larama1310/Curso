// import React from 'react'
// 4) template expressions => executar js entre chaves

const TemplateExpressions = () => {
    const name = "Rafael"

    const data = {
        age: 18,
        job: "Estudante"
    }

    const arr = [1, 2, 3, 4, 5]

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo, {name}</h3>
        <p>Sua idade é {data.age} e sua ocupação é {data.job.toLowerCase()}</p>
        <h4>{arr.join(", ")}</h4>
    </div>
  )
}

export default TemplateExpressions