import { Link } from "react-router-dom";

import "./styles.scss";
import ViewProfile from "./components/ViewProfile";
import Logout from "./components/Logout";

const Sidebar = () => {
  return (
    <section className="container-sidebar">
      <div className="logo">
        <img src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=8" />
      </div>

      <nav className="nav-sidebar">
        <ul>
          <li>
            <Link to="/">Resumo</Link>
          </li>
          <li>
            <Link to="/loan">Empréstimos</Link>
          </li>
          <li>
            <Link to="/reports">Relatorios</Link>
          </li>
          <li>
            <Link to="/inventory">Estoque</Link>
          </li>
        </ul>
      </nav>

      <div className="container-sidebar-user">
        <Logout />

        <ViewProfile />
      </div>
    </section>
  );
};

export default Sidebar;
