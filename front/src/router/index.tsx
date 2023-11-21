import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Bot from "../pages/Bot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/bot",
    element: <Bot />,
  },
]);
export default router;
