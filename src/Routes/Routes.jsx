import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../page/LoginPage/LoginPage";
import Dashboard from "../page/Dashboard/Dashboard";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AlreadyLoggedIn from "../ProtectedRoute/AlreadyLoggedIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App></App>
      </ProtectedRoute>
    ),
  },

  {
    path: "/login",
    element: (
      <AlreadyLoggedIn>
        <LoginPage></LoginPage>
      </AlreadyLoggedIn>
    ),
  },

  {
    path: "/admin",
    element: 
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    
  },
]);

export default routes;
