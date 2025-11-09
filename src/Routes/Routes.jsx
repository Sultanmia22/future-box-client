import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      
      {
        path:'/registration',
        element:<Registration/>
      },

      {
        path: '/login',
        element:<Login/>
      }
    ]
  },
]);

export default router