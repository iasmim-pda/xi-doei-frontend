import { createBrowserRouter } from "react-router-dom";
import App from "../app.jsx";
import Home from "../pages/Home/Home.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        }
      ]
    }
])