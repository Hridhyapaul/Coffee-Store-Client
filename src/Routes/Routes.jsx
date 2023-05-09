import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddCoffee from "../Component/AddCoffee";
import UpdateCoffee from "../Component/UpdateCoffee";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
    },
    {
        path: "updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
    }
  ]);

  export default router;