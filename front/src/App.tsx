import router from "./router";
import { RouterProvider } from "react-router-dom";

export const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);
