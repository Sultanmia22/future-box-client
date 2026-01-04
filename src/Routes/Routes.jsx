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
import MyProfile from "../Pages/MyProfile";
import DashboardLayout from "../Layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: '/registration',
        element: <Registration />
      },

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/viewDetails/:id',
        element: <PrivertRouts>
          <ViewDetails />
        </PrivertRouts>
      },

      {
        path: '/exploreArtwork',
        element: <ExploreArtwork />
      },



      {
        path: '/contact',
        element: <Contact />
      },

      {
        path: '/about',
        element: <About />
      },

      {
        path: '/my-profile',
        element: <MyProfile />
      }

    ]
  },

  // dashboad layout

  {
    path: '/dahsboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <PrivertRouts>
          <AddArtwork />
        </PrivertRouts>
      },

         {
        path: '/dahsboard/addart',
        element: <PrivertRouts>
          <AddArtwork />
        </PrivertRouts>
      },


      {
        path: '/dahsboard/mygallery',
        element: <PrivertRouts>
          <MyGelary />
        </PrivertRouts>
      },


      {
        path: '/dahsboard/myfavourite',
        element: <PrivertRouts>
          <MyFavourite />
        </PrivertRouts>
      },

    ]
  }
]);

export default router