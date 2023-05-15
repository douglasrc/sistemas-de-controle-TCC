import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { Notifications, ShowToast } from "../Notifications";

import "./styles.scss";

const Login = () => {
  const { dispatch, currentUser } = useContext(AuthContext);
  const navitage = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeInput, setTypeInput] = useState("password");
  const [typeIcon, setTypeIcon] = useState("visibility");

  const hambleIsVisible = () => {
    if (typeInput == "password") {
      setTypeInput("text");
      setTypeIcon("visibility_off");
    } else {
      setTypeInput("password");
      setTypeIcon("visibility");
    }
  };

  const hambleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      //fazer a requisição para a api do Firestore, para verificar se o usuario exite, caso ele exista
      //salvar os dados dele no localStorage, caso não exista, eviar uma mensagem de erro
      //ShowToast({ type: "error", message: "Usuário ou senha inválido" });
      const data = {
        name: "Zé da Manga",
      };

      dispatch({ type: "LOGIN", payload: data });
      navitage("/");

      //
      // const getStorage = localStorage.getItem("user") || "";
      // const teste = JSON.parse(getStorage);
      // console.log(teste.name);
      // if (getStorage !== "") {
      //   console.log("entrou no if");
      // } else {
      //   localStorage.setItem("user", JSON.stringify(data));
      //   ShowToast({ type: "error", message: "Usuário ou senha inválido" });
      // }
    } else {
      !email && !password
        ? ShowToast({
            type: "error",
            message: "Todos os campos devem ser preenchidos",
          })
        : !email
        ? ShowToast({
            type: "error",
            message: "Campo de email não pode ser vazio",
          })
        : !password &&
          ShowToast({
            type: "error",
            message: "Campo de senha não pode ser vazio",
          });
    }
  };

  return (
    <>
      {currentUser ? (
        <Navigate to="/" />
      ) : (
        <>
          <Notifications />

          <section className="container-form">
            <section className="content-form">
              <div>
                <h1>Sistema de Controle</h1>
              </div>
              <form onSubmit={hambleLogin}>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <div className="password-input">
                    <input
                      type={typeInput}
                      placeholder="●●●●●●●●"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <span
                      className="material-symbols-outlined"
                      onClick={hambleIsVisible}
                    >
                      {typeIcon}
                    </span>
                  </div>
                </div>
                <button className="button" type="submit">
                  Login
                </button>
              </form>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default Login;
