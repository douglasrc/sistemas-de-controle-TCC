import { useState } from "react";
import "./styles.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [typeInput, setTypeInput] = useState("password");
  const [typeIcon, setTypeIcon] = useState("visibility");

  const hambleLogin = (e) => {
    e.preventDefault();
  };

  const hambleIsVisible = () => {
    if (typeInput == "password") {
      setTypeInput("text");
      setTypeIcon("visibility_off");
    } else {
      setTypeInput("password");
      setTypeIcon("visibility");
    }
  };

  return (
    <section className="container-form">
      <section className="content-form">
        <div>
          <h1>Sistema de Controle</h1>
        </div>

        <form onSubmit={hambleLogin}>
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
          <button type="submit">Login</button>
        </form>
      </section>
    </section>
  );
};

export default Login;
