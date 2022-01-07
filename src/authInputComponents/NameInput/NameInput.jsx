import CustomInput from "../../components/CustomInput";
import { isNameValid } from "./validation";

export default function NameInput({
  placeholder,
  isReset,
  accessInputValue,
}) {

  return (
    <CustomInput
      type="text"
      placeholder={placeholder}
      isReset={isReset}
      valueAccessFuncOnBlur={accessInputValue}
      validationFunc={isNameValid}
    />
  );
}
