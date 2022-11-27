import { NavLink } from "react-router-dom";
import { paths } from "../../router/getPaths";
import MainLayout from "../../Layout/MainLayout";
import "./style.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-items-center">
        <ul>
          <li>
            <NavLink className="px-5 py-3" to={paths.SIGNIN}>ثبت نام</NavLink>
          </li>
          <li>
            <NavLink className="px-5 py-3" to={paths.PANEL}>پنل کاربری</NavLink>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}
