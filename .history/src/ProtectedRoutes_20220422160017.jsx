import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("access_token");
  let userLogin = false;
  if (user) {
    userLogin = true;
  } else {
    userLogin = false;
  }
  return userLogin;
};

const ProtectedRoute = () => {
  const loggedIn = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
