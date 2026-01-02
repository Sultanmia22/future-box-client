import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ViewDetails from "../Components/ViewDetails";
import PrivertRouts from "../PrivetRoutes/PrivertRouts";
import ExploreArtwork from "../Pages/ExploreArtwork";
import MyFavourite from "../Pages/MyFavourite";
import AddArtwork from "../Pages/AddArtwork";
import MyGelary from "../Pages/MyGelary";

import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Components/Loading";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayouts></MainLayouts>,
    errorElement: <ErrorPage/>,
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
      },

      {
        path:'/viewDetails/:id',
        element: <PrivertRouts>
          <ViewDetails/>
        </PrivertRouts>
      },

      {
        path:'/exploreArtwork',
        element:<ExploreArtwork/>
      },

      {
        path:'/myfavourite',
        element:<PrivertRouts>
          <MyFavourite/>
        </PrivertRouts>
      },

      {
        path:'/addArt',
        element:<PrivertRouts>
          <AddArtwork/>
        </PrivertRouts>
      },

      {
        path:'/mygallery',
        element:<PrivertRouts>
          <MyGelary/>
        </PrivertRouts>
      },

      {
        path: '/contact',
        element: <Contact/>
      },

      {
        path: '/about',
        element: <About/>
      }

    ]
  },
]);

export default router