import { useEffect, useState } from "react";
import useInputValueKeeper from "../../customHooks/useInputValueKeeper";
import { inputIDs } from "../../authInputComponents/inputIDs";
import { keys } from "../../storage/storagekeys";
import {
  isEmailRegisteredBefore,
  saveUserData,
  updateLoginUser,
} from "../../storage/userDataManagment";
import {
  useAuthStateContext,
  useAuthDispatcherContext,
} from "../../context/AuthContext";
import { getData } from "../../storage/authStorage";
import {
  getDuplicateEmailErrorAction,
  getSuccessfulSiginAction,
  getRemoveAlertAction,
} from "../../context/getActionObj";
import { paths } from "../../router/getPaths";
import MainLayout from "../../Layout/MainLayout";
import FormStructure from "../../components/FormStructure";
import FormAlert from "../../components/FormAlert";
import Form from "../../components/Form/Form";
import NameInput from "../../authInputComponents/NameInput";
import EmailInput from "../../authInputComponents/EmailInput";
import PasswordInput from "../../authInputComponents/PasswordInput";
import PhoneNumberInput from "../../authInputComponents/PhoneNumberInput";
import ButtonsContainer from "../../components/ButtonsContainer";
import Button from "../../components/Button";
import UserGideContainer from "../../components/UserGideContainer";
import UserGideLink from "../../components/UserGideLink";

export default function Signin() {
  const [isFormReset, setIsFormReset] = useState(false);

  const { inputs, updateInputValue } = useInputValueKeeper([
    inputIDs.EMAIL,
    inputIDs.PASSWORD,
    inputIDs.TEL,
    inputIDs.NAME,
  ]);

  const isSubmitBtnEnable = Object.keys(inputs)
    .map((item) => inputs[item])
    .every((value) => value !== null);

  const { alert } = useAuthStateContext();

  const dispatch = useAuthDispatcherContext();

  const emailUpdateHandler = (value) => {
    updateInputValue(inputIDs.EMAIL, value);
  };

  const passwordUpdateHandler = (value) => {
    updateInputValue(inputIDs.PASSWORD, value);
  };

  const telUpdateHandler = (value) => {
    updateInputValue(inputIDs.TEL, value);
  };

  const nameUpdateHandler = (value) => {
    updateInputValue(inputIDs.NAME, value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isEmailRegisteredBefore(inputs[inputIDs.EMAIL])) {
      dispatch(getDuplicateEmailErrorAction(getData(keys.LOGIN_USER)));
      return;
    }

    const user = {
      name: inputs[inputIDs.NAME],
      email: inputs[inputIDs.EMAIL],
      tel: inputs[inputIDs.TEL],
      password: inputs[inputIDs.PASSWORD],
    };
    saveUserData(keys.USERS, user);

    updateLoginUser(null);

    dispatch(getSuccessfulSiginAction());
  };

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

  return (
    <MainLayout>
      <FormStructure formTitle="فرم ثبت نام">
        {alert && (
          <FormAlert alertColorClass={alert.type} alertText={alert.text} />
        )}
        <Form submitHandler={submitHandler}>
          <div className="mb-4">
            <NameInput
              placeholder="نام و نام خانوادگی"
              accessInputValue={nameUpdateHandler}
              isReset={isFormReset}
            />
          </div>

          <div className="mb-4">
            <EmailInput
              placeholder="ایمیل"
              accessInputValue={emailUpdateHandler}
              isReset={isFormReset}
            />
          </div>

          <div className="mb-4">
            <PhoneNumberInput
              placeholder="تلفن همراه"
              accessInputValue={telUpdateHandler}
              isReset={isFormReset}
            />
          </div>

          <div className="mb-4 position-relative">
            <PasswordInput
              placeholder="کلمه عبور"
              accessInputValue={passwordUpdateHandler}
              isReset={isFormReset}
            />
          </div>

          <ButtonsContainer>
            <Button
              type="submit"
              colorClass="success"
              label="ثبت نام"
              isEnable={isSubmitBtnEnable}
            />

            <Button
              type="button"
              colorClass="outline-danger"
              label="ریست فرم"
              onClick={() => {
                setIsFormReset(true);
              }}
            />
          </ButtonsContainer>

          <UserGideContainer spacingClasses="mt-3 pt-3">
            <span className="text-muted font-13">اکانت داری؟ </span>
            <UserGideLink path={paths.LOGIN} label="وادر شو" />
          </UserGideContainer>
        </Form>
      </FormStructure>
    </MainLayout>
  );
}
