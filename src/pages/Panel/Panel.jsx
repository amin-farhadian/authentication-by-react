import {
  useAuthStateContext,
  useAuthDispatcherContext,
} from "../../context/AuthContext";
import { getLogoutAction } from "../../context/getActionObj";
import { updateLoginUser } from "../../storage/userDataManagment";
import MainLayout from "../../Layout/MainLayout";
import PanelStructure from "./components/PanelStructure";
import PanelTitle from "./components/PanelTitle";
import PanelBody from "./components/PanelBody";
import PanelInfo from "./components/PanelInfo";
import Button from "../../components/Button";

export default function Panel() {
  const dispatch = useAuthDispatcherContext();

  const user = useAuthStateContext().loginUser[0];

  const userFirstName = user.name.slice(0, user.name.indexOf(" "));

  const logouteHandler = () => {
    updateLoginUser(null);

    dispatch(getLogoutAction());
  };

  return (
    <MainLayout>
      <PanelStructure>
        <PanelTitle name={userFirstName} />
        <PanelBody>
          <PanelInfo
            labelKey="نام و نام خانوادگی"
            labelValue={user.name}
            badgeColorClass="success"
          />
          <PanelInfo
            labelKey="ایمیل"
            labelValue={user.email}
            badgeColorClass="dark"
          />
          <PanelInfo
            labelKey="شماره موبایل"
            labelValue={user.tel}
            badgeColorClass="primary"
          />

          <div className="text-end pt-3">
            <Button
              colorClass="warning"
              label="خروج از پنل"
              type="button"
              onClick={logouteHandler}
            />
          </div>
        </PanelBody>
      </PanelStructure>
    </MainLayout>
  );
}
