import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/useAuth";
import { useToaster } from "../contexts/ToasterContext/useToaster";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { showToast } = useToaster();

  if (!isAuthenticated) {
    // show toast error only registered user can create events
    // Show toast error
    showToast("You are not logged in . Please login to continue", "error");

    // Redirect to login page
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;
