import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/getPaths";
import { keys } from "../../storage/storagekeys";
import {
  getSuccessfulRecCodeSendAction,
  getUnregisteredEmailErrorAction,
  getUnsuccessfulRecCodeSendAction,
  getWrongRecCodeErrorAction,
  getRemoveAlertAction,
} from "../../context/getActionObj";
import { getData } from "../../storage/authStorage";
import {
  isEmailRegisteredBefore,
  getUserData,
} from "../../storage/userDataManagment";
import {
  useAuthDispatcherContext,
  useAuthStateContext,
} from "../../context/AuthContext";
import { getRandomString } from "../../utils/randomStringGenerator";
import useInputValueKeeper from "../../customHooks/useInputValueKeeper";
import { inputIDs } from "../../authInputComponents/inputIDs";
import emailSender from "./emailSender";
import MainLayout from "../../Layout/MainLayout";
import FormStructure from "../../components/FormStructure";
import FormAlert from "../../components/FormAlert";
import Form from "../../components/Form/Form";
import EmailInput from "../../authInputComponents/EmailInput";
import RecCodeInput from "../../authInputComponents/RecCodeInput";
import ButtonsContainer from "../../components/ButtonsContainer";
import Button from "../../components/Button";
import RecoveryGide from "./RecoveryGide";
import "./style.css";

export default function GetRecoveryCode() {
  const [recCode, setRecCode] = useState(null);

  const [userInfo, setUserInfo] = useState(null);

  const { inputs, updateInputValue } = useInputValueKeeper([
    inputIDs.EMAIL,
    inputIDs.REC_CODE,
  ]);

  const isSubmitBtnEnable = Object.keys(inputs)
    .map((item) => inputs[item])
    .every((value) => value !== null);

  const { alert } = useAuthStateContext();

  const dispatch = useAuthDispatcherContext();

  const navigate = useNavigate();

  useEffect(() => {
    let removeAlert = null;

    if (alert) {
      removeAlert = setTimeout(() => {
        dispatch(getRemoveAlertAction());
      }, 3500);
    }

    return () => {
      removeAlert && clearTimeout(removeAlert);
    };
  }, [alert, dispatch]);

  useEffect(() => {
    recCode && dispatch(getSuccessfulRecCodeSendAction(userInfo));
  }, [recCode, userInfo, dispatch]);

  const emailUpdateHandler = (value) => {
    updateInputValue(inputIDs.EMAIL, value);
  };

  const recCodeUpdateHandler = (value) => {
    updateInputValue(inputIDs.REC_CODE, value);
  };

  const sendCodeHandler = async () => {
    const email = inputs[inputIDs.EMAIL];

    // If the email was not already registered
    if (!isEmailRegisteredBefore(email)) {
      dispatch(getUnregisteredEmailErrorAction(getData(keys.LOGIN_USER)));

      return;
    }

    const user = getUserData(email);

    const code = getRandomString(8);

    const sendCodeResult = await emailSender(user.name, email, code);

    if (sendCodeResult) {
      setUserInfo(user);

      setRecCode(code);
    } else {
      dispatch(getUnsuccessfulRecCodeSendAction(getData(keys.LOGIN_USER)));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // if the recovery code that client entered was not equal to code that send to email
    if (inputs[inputIDs.REC_CODE] !== recCode) {
      dispatch(getWrongRecCodeErrorAction(getData(keys.LOGIN_USER)));

      return;
    }

    navigate(paths.CHANGE_PASS, {
      replace: false,
      state: { isRecCodeConfirm: true },
    });
  };

  return (
    <MainLayout>
      <FormStructure formTitle="فرم بازیابی کلمه عبور">
        {alert && (
          <FormAlert alertColorClass={alert.type} alertText={alert.text} />
        )}
        <Form submitHandler={submitHandler}>
          <RecoveryGide />

          <div className="mb-4">
            <EmailInput
              placeholder="ایمیل"
              accessInputValue={emailUpdateHandler}
            />
          </div>

          <div className="mb-4">
            <RecCodeInput
              placeholder="کد ورود به صفحه بازیابی"
              accessInputValue={recCodeUpdateHandler}
            />
          </div>

          <ButtonsContainer>
            <Button
              type="submit"
              colorClass="success"
              label="ورورد به صفحه بازیابی"
              isEnable={isSubmitBtnEnable}
            />

            <Button
              type="button"
              colorClass="outline-primary"
              label="ارسال کد به ایمیل"
              onClick={sendCodeHandler}
              isEnable={inputs[inputIDs.EMAIL] !== null}
            />
          </ButtonsContainer>
        </Form>
      </FormStructure>
    </MainLayout>
  );
}
