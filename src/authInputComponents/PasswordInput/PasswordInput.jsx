import { useLayoutEffect, useState } from "react";
import { isPasswordValid } from "./validation";
import PassVisibilityEyes from "./PassVisibilityEyes";
import PasswordAlert from "./PasswordAlert";
import CustomInput from "../../components/CustomInput";

export default function PasswordInput({
  placeholder,
  accessInputValue,
  isReset = false,
  forceInvalidStyle = null,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [alertVisibility, setAlertVisibility] = useState(false);

  useLayoutEffect(() => {
    if (isReset) {
      setIsPasswordVisible(false);

      setAlertVisibility(false);
    }
  }, [isReset]);

  const customAccessInputValue = (value) => {
    setAlertVisibility(!isPasswordValid(value));

    accessInputValue(value);
  };

  const changePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <PassVisibilityEyes
        isVisible={isPasswordVisible}
        changeVisibilityAction={changePasswordVisibility}
      />

      <CustomInput
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        isReset={isReset}
        valueAccessFuncOnBlur={customAccessInputValue}
        validationFunc={isPasswordValid}
        forceInvalidStyle={forceInvalidStyle}
      />

      <PasswordAlert
        alertText="کلمه ی عبور باید شامل یک حرف بزرگ و یک حرف کوچک لاتین ، یک عدد و یک کاراکتر خاص باشد."
        isVisible={alertVisibility}
      />
    </>
  );
}
