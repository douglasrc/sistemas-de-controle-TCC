import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthContext";

import "./styles.scss";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);
  const navitage = useNavigate();

  const handlerLogout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    navitage("/login");
  };

  return (
    <>
      <button className="logout button" onClick={() => handlerLogout()}>
        <Link to="/login">
          <span className="material-symbols-outlined">logout</span>Logout
        </Link>
      </button>
    </>
  );
};

export default Logout;
