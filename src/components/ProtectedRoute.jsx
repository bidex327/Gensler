import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("auth-token");

  if (!token) {
    return <Navigate to="/create-user" replace />;
  }

  return children;
};

export default ProtectedRoute;