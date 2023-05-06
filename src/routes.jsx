import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Board from "./components/Pages/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Board /> }],
  },
]);

export default router;
