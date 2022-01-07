import { Link } from "react-router-dom";
import { paths } from "../../router/getPaths";
import MainLayout from "../../Layout/MainLayout";
import "./style.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="col-12">
        <h2>صفحه ی اصلی</h2>
        <ul>
          <li>
            <Link to={paths.SIGNIN}>ثبت نام</Link>
          </li>
          <li>
            <Link to={paths.PANEL}>پنل کاربری</Link>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}
