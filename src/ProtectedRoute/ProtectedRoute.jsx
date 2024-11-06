import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if(!(token && user )){
    return <Navigate to='/login'></Navigate>
  }

  return children
};

export default ProtectedRoute;