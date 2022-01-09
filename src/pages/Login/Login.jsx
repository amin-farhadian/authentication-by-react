import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useInputValueKeeper from "../../customHooks/useInputValueKeeper";
import { inputIDs } from "../../authInputComponents/inputIDs";
import { keys } from "../../storage/storagekeys";
import {
  useAuthStateContext,
  useAuthDispatcherContext,
} from "../../context/AuthContext";
import { getData } from "../../storage/authStorage";
import {
  getRemoveAlertAction,
  getSuccessfulLoginAction,
  getLoginPasswordErrorAction,
  getUnregisteredEmailErrorAction,
} from "../../context/getActionObj";
import {
  isEmailRegisteredBefore,
  updateLoginUser,
  getUserData,
} from "../../storage/userDataManagment";
import { paths } from "../../router/getPaths";
import MainLayout from "../../Layout/MainLayout";
import FormStructure from "../../components/FormStructure";
import FormAlert from "../../components/FormAlert";
import Form from "../../components/Form/Form";
import EmailInput from "../../authInputComponents/EmailInput";
import PasswordInput from "../../authInputComponents/PasswordInput";
import ButtonsContainer from "../../components/ButtonsContainer";
import Button from "../../components/Button";
import UserGideContainer from "../../components/UserGideContainer";
import UserGideLink from "../../components/UserGideLink";

export default function Login() {
  const [isFormReset, setIsFormReset] = useState(false);

  const [isPasswordStyleInvalid, setIsPasswordStyleInvalid] = useState(null);

  const { inputs, updateInputValue } = useInputValueKeeper([
    inputIDs.EMAIL,
    inputIDs.PASSWORD,
  ]);

  const isSubmitBtnEnable = Object.keys(inputs)
    .map((item) => inputs[item])
    .every((value) => value !== null);

  const { loginUser, alert } = useAuthStateContext();

  const dispatch = useAuthDispatcherContext();

  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || paths.HOME;

  useLayoutEffect(() => {
    if (loginUser.length > 0) {
      navigate(from, { replace: true });
    }
  }, [loginUser, from, navigate]);

  useEffect(() => {
    isFormReset && setIsFormReset(false);

    let removeAlert = null;

    if (alert) {
      removeAlert = setTimeout(() => {
        dispatch(getRemoveAlertAction());
      }, 3500);
    }

    return () => {
      removeAlert && clearTimeout(removeAlert);
    };
  }, [isFormReset, alert, dispatch]);

  const emailUpdateHandler = (value) => {
    updateInputValue(inputIDs.EMAIL, value);
  };

  const passwordUpdateHandler = (value) => {
    setIsPasswordStyleInvalid(null);

    updateInputValue(inputIDs.PASSWORD, value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // If the email was not already registered
    if (!isEmailRegisteredBefore(inputs[inputIDs.EMAIL])) {
      dispatch(getUnregisteredEmailErrorAction(getData(keys.LOGIN_USER)));

      return;
    }

    const data = getUserData(inputs[inputIDs.EMAIL]);

    // If the password was incorrect
    if (data.password !== inputs[inputIDs.PASSWORD]) {
      dispatch(getLoginPasswordErrorAction(getData(keys.LOGIN_USER)));

      setIsPasswordStyleInvalid(true);

      return;
    }

    // if everything was ok
    updateLoginUser(data);

    dispatch(getSuccessfulLoginAction(getData(keys.LOGIN_USER)));
  };

  return (
    <MainLayout>
      <FormStructure formTitle="فرم ورود به پنل کاربری">
        {alert && (
          <FormAlert alertColorClass={alert.type} alertText={alert.text} />
        )}
        <Form submitHandler={submitHandler}>
          <div className="mb-4">
            <EmailInput
              placeholder="ایمیل"
              accessInputValue={emailUpdateHandler}
              isReset={isFormReset}
            />
          </div>

          <div className="mb-4 position-relative">
            <PasswordInput
              placeholder="کلمه عبور"
              accessInputValue={passwordUpdateHandler}
              isReset={isFormReset}
              forceInvalidStyle={isPasswordStyleInvalid}
            />
          </div>

          <ButtonsContainer>
            <Button
              type="submit"
              colorClass="success"
              label="ورود"
              isEnable={isSubmitBtnEnable}
            />

            <Button
              type="reset"
              colorClass="outline-danger"
              label="ریست فرم"
              onClick={() => {
                setIsFormReset(true);
              }}
            />
          </ButtonsContainer>

          <UserGideContainer>
            <UserGideLink
              path={paths.GET_RECOVERY_CODE}
              label="کلمه عبور را فراموش کرده اید؟"
            />
          </UserGideContainer>

          <UserGideContainer spacingClasses="mt-3 pt-3">
            <span className="text-muted font-13">هنوز اکانتی ندارید؟ </span>
            <UserGideLink path={paths.SIGNIN} label="ثبت نام کن" />
          </UserGideContainer>
        </Form>
      </FormStructure>
    </MainLayout>
  );
}
