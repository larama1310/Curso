import React, { useState } from "react";

const MyForm = () => {
  // podem ser passadas props também, alterando o estado => API
  // 3) gerenciamento de dados
  const [name, setName] = useState(); // resolve o problema 6) iniciando a string vazia ("")
  const [email, setEmail] = useState();

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5) envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);
    // depois viria validação e envio

    // 7) limpar o form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1) criação de form */}
      {/* 5) envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // 6) controled input
            value={name || ""}
          />
        </div>

        {/* 2) label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            // 4) simplificando a mainpulação
            onChange={(e) => setEmail(e.target.value)}
            // 6) controled input
            value={email | ""}
          />
        </label>

        {/* 8) textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9) select */}
        <label>
          <span>Função no sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
