import { Outlet, useLocation, Navigate } from "react-router-dom";
import { paths } from "./getPaths";

export default function ChangePassRoute() {
  const location = useLocation();
  
  let isRenderPage = location.state ? location.state.isRecCodeConfirm : null;

  return isRenderPage ? (
    <Outlet />
  ) : (
    <Navigate to={paths.GET_RECOVERY_CODE} replace={true} />
  );
}
