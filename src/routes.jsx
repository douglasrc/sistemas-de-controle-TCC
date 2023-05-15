import { useContext } from "react";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import App from "./App";
import { GlobalContextUser } from "./context";
import { AuthContext } from "./context/AuthContext";

import Board from "./components/Pages/Board";
import Login from "./components/Login";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalContextUser>
        <RequireAuth>
          <App />
        </RequireAuth>
      </GlobalContextUser>
    ),
    children: [{ path: "/", element: <Board /> }],
  },
  {
    path: "/login",
    element: (
      <GlobalContextUser>
        <Login />
      </GlobalContextUser>
    ),
  },
]);

export default router;
