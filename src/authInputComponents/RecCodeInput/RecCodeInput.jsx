import CustomInput from "../../components/CustomInput";
import { isCodeStructureValid } from "./validation";

export default function RecCodeInput({
  placeholder,
  accessInputValue,
}) {

  return (
    <CustomInput
      type="text"
      placeholder={placeholder}
      valueAccessFuncOnBlur={accessInputValue}
      validationFunc={isCodeStructureValid}
    />
  );
}
