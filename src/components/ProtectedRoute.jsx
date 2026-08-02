import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("auth-token");

  if (!token) {
    return <Navigate to="/login-user" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      localStorage.removeItem("auth-token");
      return <Navigate to="/login-user" replace />;
    }

    return children;
  } catch (err) {
    localStorage.removeItem("auth-token");
    return <Navigate to="/login-user" replace />;
  }
};

export default ProtectedRoute;