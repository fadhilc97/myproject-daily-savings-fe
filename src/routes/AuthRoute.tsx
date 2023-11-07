import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function AuthRoute() {
  const { auth } = useContext(AuthContext);

  return auth.accessToken ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoute;
