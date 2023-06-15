import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Loan() {
  const [borrowerName, setBorrowerName] = useState("");
  const [qtd, setQtd] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  async function handleUserRegister(e) {
    e.preventDefault();

    const data = {
      qtd,
      id,
      borrowerName,
      phone,
      date,
    };
  }

  return (
    <div className="register-container">
      <div className="content">
        <form onSubmit={handleUserRegister}>
          <input
            placeholder="Nome"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
            required
          />
          <div className="input-group">
            <input
              placeholder="Matrícula"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <input
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Quantidade"
              style={{ width: 110 }}
              value={qtd}
              onChange={(e) => setQtd(e.target.value)}
              required
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
