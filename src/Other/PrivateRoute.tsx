import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: { isAuth: boolean }) => {
  return props.isAuth ? <Navigate to="/profile" /> : <Outlet />;
};

export default PrivateRoute;
