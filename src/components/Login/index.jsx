import { useState } from "react";
import "./styles.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const hembleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container-form">
      <section className="content-form">
        <div>
          <h1>Sistema de Controle</h1>
        </div>

        <form onSubmit={hembleLogin}>
          <div className="input-group">
            <label>Ursername</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            ></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="●●●●●●●●"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </section>
  );
};

export default Login;
