import React from 'react'

const Events = () => {

    const handleClick = (e) => { {/* vai usar muito o argumento evento */}
        console.log(e)
        console.log("Executou!")
    }

    // 8) função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

    // é usado aqui um early return para depois fazer o return principal
    // ex: return 10 > 2 && <p>Carregando...</p>
    // assim que 10 > 2 fosse falso (exemplo, se fosse uma api), iria pro return principal

  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>
                Clique aqui
            </button>
        </div>
        
        {/* 7) eventos com função */}
        <div>
            <button onClick={handleClick}>Clique aqui com função</button>
        </div>

        {/* 8) função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

// o "atributo" onClick chama-se "prop"

export default Events