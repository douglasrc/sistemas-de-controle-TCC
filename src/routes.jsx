import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Board from "./components/Pages/Board";
import Login from "./components/Login";

const curentUser = true;

const RequireAuth = ({ children }) => {
  return curentUser ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    children: [{ path: "/", element: <Board /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
