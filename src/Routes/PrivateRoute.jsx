import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   console.log(user);

  if (loading) {
    // must user 'return'
    // otherwise, reloading will take you to login page
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    // console.log("user has email: ", user.email);
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
