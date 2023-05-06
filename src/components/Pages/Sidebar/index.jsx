import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <a>
        <img src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50&q=8" />
      </a>

      <nav className="nav-sidebar">
        <ul>
          <li>
            <a href="#">Board</a>
          </li>
          <li>
            <a href="#">Equipes</a>
          </li>
          <li>
            <a href="#">Relatorios</a>
          </li>
          <li>
            <a href="#">Configuraçoes</a>
          </li>
          <li className="logout">
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
