import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

function Reports() {
  const [armario, setArmario] = useState("");
  const [caixa, setCaixa] = useState("");
  const [nome, setNome] = useState("");

  const searchStock = () => {
    database
      .ref("estoque")
      .orderBy("nome")
      .equalTo(nome)
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
      })
      .catch((error) => {
        console.log("Erro na Busca:", error);
      });
  };

  return (
    <div>
      <h2>Relatório de Estoque</h2>

      <div>
        <input
          type="text"
          value={armario}
          onChange={(e) => setArmario(e.target.value)}
          placeholder="Armário"
        />
        <input
          type="text"
          value={caixa}
          onChange={(e) => setCaixa(e.target.value)}
          placeholder="Caixa"
        />
        <input
          type="text"
          value={nomeEquipamento}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Equipamento"
        />
        <button onClick={searchStock}>Buscar</button>
      </div>

      {/* Exibir os resultados do relatório */}
      {/* Restante do código... */}
    </div>
  );
}
