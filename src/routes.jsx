import { useContext } from "react";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import App from "./App";
import { GlobalContextUser } from "./context";
import { AuthContext } from "./context/AuthContext";

import Board from "./components/Pages/Board";
import Login from "./components/Login";
import Inventory from "./components/Pages/Sidebar/components/Invetory";
import Loan from "./components/Pages/Sidebar/components/Loan";
//import Reports from "./components/Pages/Sidebar/components/Reports";

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
    children: [
      { path: "/", element: <Board /> },
      { path: "/inventory", element: <Inventory /> },
      //{ path: "/reports", element: <Reports /> },
      { path: "/loan", element: <Loan /> },
    ],
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
