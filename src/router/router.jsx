import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Kontakt from "../components/Kontakt/Kontakt";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: '/contact',
        element: <Kontakt/>,
      },
    ]
  }
]) 

export default router;