import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Inventory() {
  const [name, setName] = useState("");
  const [armario, setArmario] = useState("");
  const [caixa, setCaixa] = useState("");
  const [qtd, setQtd] = useState("");
  const [description, setDescription] = useState("");
  const [foto, setFoto] = useState("null");
  const [preview, setPreview] = useState("null");

  async function handleUserRegister(e) {
    e.preventDefault();

    const data = {
      name,
      armario,
      caixa,
      qtd,
      description,
      foto,
    };
  }

  const handleFotoChange = (event) => {
    const arquivo = event.target.files[0];
    setFoto(arquivo);

    const previewURL = URL.createObjectURL(arquivo);
    setPreview(previewURL);
  };

  const handleRemoveFoto = () => {
    setFoto(null);
    setPreview(null);
  };

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
              placeholder="Armario"
              value={armario}
              onChange={(e) => setArmario(e.target.value)}
              required
            />
            <input
              placeholder="Caixa"
              value={caixa}
              onChange={(e) => setCaixa(e.target.value)}
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

          <textarea
            className="textarea-traveler"
            placeholder="Descrição"
            style={{ height: 92 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input type="file" onChange={handleFotoChange} />

          {preview && (
            <div>
              <img src={preview} style={{ maxWidth: "50%", marginTop: 10 }} />
              <button type="button" onClick={handleRemoveFoto}>
                Remover Imagem
              </button>
            </div>
          )}

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
