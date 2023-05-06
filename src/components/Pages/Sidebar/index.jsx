import { Link } from "react-router-dom";
import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <div className="logo">
        <img src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=8" />
      </div>

      <nav className="nav-sidebar">
        <ul>
          <li>
            <Link to="/">Resumo</Link>
          </li>
          <li>
            <Link to="equipes">Equipes</Link>
          </li>
          <li>
            <Link to="relatorios">Relatorios</Link>
          </li>
          <li>
            <Link to="configuracoes">Configuraçoes</Link>
          </li>
          <li className="logout">
            <Link to="login">
              <span class="material-symbols-outlined">logout</span>Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
