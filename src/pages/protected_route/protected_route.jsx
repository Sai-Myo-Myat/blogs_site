import { Navigate } from "react-router";
import { useAuth } from "../../context/auth_context";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  if (auth.user) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
