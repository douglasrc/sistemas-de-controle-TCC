import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Inventory() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  async function handleUserRegister(e) {
    e.preventDefault();

    const data = {
      name,
      cpf,
      rg,
      age,
      email,
      whatsapp,
      city,
      uf,
      address,
      description,
    };
  }

  return (
    <div className="register-container">
      <div className="content">
        <form onSubmit={handleUserRegister}>
          <input
            placeholder="Equipamento"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="input-group">
            <input
              placeholder="Número de Serie"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <input
              placeholder="Descrição"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Quantidade"
              style={{ width: 110 }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="***********"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="***********"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />

          <textarea
            className="textarea-traveler"
            placeholder="Caracteristicas"
            style={{ height: 92 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
