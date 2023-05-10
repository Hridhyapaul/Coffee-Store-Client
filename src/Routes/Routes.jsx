import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddCoffee from "../Component/AddCoffee";
import UpdateCoffee from "../Component/UpdateCoffee";
import Products from "../Section/Products/Products";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Products></Products>,
            loader: () => fetch('http://localhost:3000/coffee')
        }
      ]
    },
    {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
    },
    {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
    }
  ]);

  export default router;