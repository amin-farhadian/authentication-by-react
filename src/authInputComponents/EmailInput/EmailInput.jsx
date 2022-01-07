import CustomInput from "../../components/CustomInput";
import { isEmailValid } from "./validation";

export default function EmailInput({ placeholder, isReset, accessInputValue }) {
  return (
    <CustomInput
      type="email"
      placeholder={placeholder}
      isReset={isReset}
      valueAccessFuncOnBlur={accessInputValue}
      validationFunc={isEmailValid}
    />
  );
}
