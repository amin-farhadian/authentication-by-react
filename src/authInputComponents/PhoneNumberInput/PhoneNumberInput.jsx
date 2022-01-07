import CustomInput from "../../components/CustomInput";
import { isPhoneNumberValid } from "./validation";

export default function PhoneNumberInput({
  placeholder,
  isReset,
  accessInputValue,
}) {

  return (
    <CustomInput
      type="tel"
      placeholder={placeholder}
      isReset={isReset}
      valueAccessFuncOnBlur={accessInputValue}
      validationFunc={isPhoneNumberValid}
    />
  );
}
