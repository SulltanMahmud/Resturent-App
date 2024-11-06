import { Navigate } from "react-router-dom";

const AlreadyLoggedIn = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (token && user) {
    return <Navigate to="/admin"></Navigate>;
  }
  return children;
};

export default AlreadyLoggedIn;
