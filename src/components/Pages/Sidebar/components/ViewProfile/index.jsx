import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthContext";

import "./styles.scss";

const ViewProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className="view-profile">
      <Link to="#">
        <img src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=8" />

        <p>
          <strong>{user.name}</strong>
          <span>View profile</span>
        </p>
        <span className="material-symbols-outlined">more_vert</span>
      </Link>
    </div>
  );
};

export default ViewProfile;
