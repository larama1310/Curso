import React from "react";
import MyComponent from "./components/MyComponent";

const App = () => {
  const n = 15; // css dinâmico

  const redTitle = true; // classe dinâmica

  return (
    <div>
      {/* 1) css global */}
      <h1>CSS no React</h1>

      {/* 2) css de componente */}
      <MyComponent />
      <p>Pegou o css do componente</p>

      {/* 3) inline style (ruim) */}
      <p style={{ color: "blue", padding: "25px" }}>
        Este elemento tem estilos inline
      </p>

      {/* 4) inline style dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "green" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "green" }}>
        CSS dinâmico
      </h2>

      {/* 5) classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe
      </h2>

      {/* 6) css modules */}
      <Title />
    </div>
  );
};

export default App;
