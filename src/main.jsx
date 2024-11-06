import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./scss/index.scss";
import routes from "../src/Routes/Routes.jsx";
import App from "./App.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <App></App>
    </RouterProvider>
  </StrictMode>
);
