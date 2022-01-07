import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputValueKeeper from "../../customHooks/useInputValueKeeper";
import { inputIDs } from "../../authInputComponents/inputIDs";
import {
  useAuthStateContext,
  useAuthDispatcherContext,
} from "../../context/AuthContext";
import {
  getRemoveAlertAction,
  getSuccessfulPasswordChangeAction,
} from "../../context/getActionObj";
import {
  updateLoginUser,
  updateUsersData,
} from "../../storage/userDataManagment";
import { paths } from "../../router/getPaths";
import MainLayout from "../../Layout/MainLayout";
import FormStructure from "../../components/FormStructure";
import FormAlert from "../../components/FormAlert";
import Form from "../../components/Form/Form";
import PasswordInput from "../../authInputComponents/PasswordInput";
import ButtonsContainer from "../../components/ButtonsContainer";
import Button from "../../components/Button";

export default function ChangePass() {
  const [isConfirmPassInvalid, setIsConfirmPassInvalid] = useState(null);

  const { inputs, updateInputValue } = useInputValueKeeper([
    inputIDs.PASSWORD,
    inputIDs.PASS_CONFIRM,
  ]);

  const isSubmitBtnEnable = Object.keys(inputs)
    .map((item) => inputs[item])
    .every((value) => value !== null);

  const { loginUser, alert } = useAuthStateContext();

  const dispatch = useAuthDispatcherContext();

  const navigate = useNavigate();

  useEffect(() => {
    let removeAlert = null;

    if (alert) {
      removeAlert = setTimeout(() => {
        dispatch(getRemoveAlertAction());

        navigate(paths.LOGIN, { replace: true });
      }, 3500);
    }

    return () => {
      removeAlert && clearTimeout(removeAlert);
    };
  }, [alert, dispatch, navigate]);

  const passwordUpdateHandler = (value) => {
    updateInputValue(inputIDs.PASSWORD, value);
  };

  const passConfirmUpdateHandler = (value) => {
    if (inputs[inputIDs.PASSWORD] !== value) {
      setIsConfirmPassInvalid(true);

      updateInputValue(inputIDs.PASS_CONFIRM, null);
    } else {
      setIsConfirmPassInvalid(null);

      updateInputValue(inputIDs.PASS_CONFIRM, value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let newData = {
      ...loginUser,
      password: inputs[inputIDs.PASSWORD],
    };

    updateUsersData(newData);

    updateLoginUser(null);

    dispatch(getSuccessfulPasswordChangeAction());
  };

  return (
    <MainLayout>
      <FormStructure formTitle="فرم تغییر کلمه عبور">
        {alert && (
          <FormAlert alertColorClass={alert.type} alertText={alert.text} />
        )}
        <Form submitHandler={submitHandler}>
          <div className="mb-4 position-relative">
            <PasswordInput
              placeholder="کلمه عبور جدید"
              accessInputValue={passwordUpdateHandler}
            />
          </div>

          <div className="mb-4 position-relative">
            <PasswordInput
              placeholder="کلمه عبور جدید خود را دوباره وارد کنید"
              accessInputValue={passConfirmUpdateHandler}
              forceInvalidStyle={isConfirmPassInvalid}
            />
          </div>

          <ButtonsContainer>
            <Button
              colorClass="success"
              type="submit"
              label="تغییر کلمه عبور"
              isEnable={isSubmitBtnEnable}
            />
          </ButtonsContainer>
        </Form>
      </FormStructure>
    </MainLayout>
  );
}
