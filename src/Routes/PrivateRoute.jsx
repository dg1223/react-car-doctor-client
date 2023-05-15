import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // get user's last browsed page from history
  const location = useLocation();

  if (loading) {
    // must user 'return'
    // otherwise, reloading will take you to login page
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    // console.log("user has email: ", user.email);
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
