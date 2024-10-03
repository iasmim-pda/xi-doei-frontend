import { createBrowserRouter } from "react-router-dom";
import App from "../app.jsx";
import Home from "../pages/Home/Home.jsx";
import RegisterProduct from "../pages/register-product/Register-product.jsx";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/cadastro-produto",
          element: <RegisterProduct/>,
        }
      ]
    }
])