import { Navigate, Outlet, useRoutes } from "react-router-dom";

import Comments from "./Pages/Comments.jsx";
import EditProduct from "./Pages/EditProduct.jsx";
import EditUser from "./Pages/EditUser.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Orders from "./Pages/Orders.jsx";
import Product from "./Pages/Product.jsx";
import Profile from "./Pages/Profile.jsx";
import RemoveProduct from "./Pages/RemoveProduct.jsx";
import RemoveUser from "./Pages/RemoveUser.jsx";
import Ticket from "./Pages/Ticket.jsx";
import User from "./Pages/User.jsx";
import PortalLayout from "./PortalLayout.jsx";

const PrivateRoutes = () => {
  const login = localStorage.getItem("login");
  return login ? (
    <PortalLayout>
      <Outlet />
    </PortalLayout>
  ) : (
    <Navigate to="/login" />
  );
};

const Routes = () => {
  let Element = useRoutes([
    {
      path: "/",
      children: [
        {
          element: <PrivateRoutes />,
          children: [
            { element: <Home />, index: true },
            { path: "/Product", element: <Product /> },
            { path: "/User", element: <User /> },
            { path: "/Comments", element: <Comments /> },
            { path: "/EditProduct", element: <EditProduct /> },
            { path: "/EditUser", element: <EditUser /> },
            { path: "/Profile", element: <Profile /> },
            { path: "/Orders", element: <Orders /> },
            { path: "/RemoveProduct", element: <RemoveProduct /> },
            { path: "/RemoveUser", element: <RemoveUser /> },
            { path: "/Ticket", element: <Ticket /> },
          ],
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <div>test</div> },
  ]);
  return Element;
};

export default Routes;
