import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { paths } from "./router/getPaths";
import PanelRoute from "./router/PanelRoute";
import ChangePassRoute from "./router/ChangePassRoute";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import ChangePass from "./pages/ChangePass";
import GetRecoveryCode from "./pages/GetRecoveryCode";
import Panel from "./pages/Panel";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.rtl.css";
import "./theme/style.css";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />

        <Route element={<PanelRoute />}>
          <Route path={paths.PANEL} element={<Panel />} />
        </Route>

        <Route path={paths.SIGNIN} element={<Signin />} />

        <Route path={paths.LOGIN} element={<Login />} />

        <Route path={paths.GET_RECOVERY_CODE} element={<GetRecoveryCode />} />

        <Route element={<ChangePassRoute />}>
          <Route path={paths.CHANGE_PASS} element={<ChangePass />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}
