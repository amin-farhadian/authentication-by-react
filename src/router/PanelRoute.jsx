import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuthStateContext } from "../context/AuthContext";
import { paths } from "./getPaths";

export default function PanelRoute() {
  const { loginUser } = useAuthStateContext();
  
  const location = useLocation();

  return loginUser.length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to={paths.LOGIN} state={{ from: location }} />
  );
}
