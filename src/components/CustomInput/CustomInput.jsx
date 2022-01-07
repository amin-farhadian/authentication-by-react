import { useState, useLayoutEffect, useEffect } from "react";
import { validStyle, invalidStyle } from "./validationStyles";
import "./style.css";

export default function CustomInput({
  type,
  placeholder,
  valueAccessFuncOnBlur = null,
  isDisable = false,
  isReset = false,
  validationFunc = null,
  forceInvalidStyle = null,
}) {
  const [value, setValue] = useState("");

  const [isInvalid, setIsInvalid] = useState(true);

  const [borderColor, setBorderColor] = useState({});

  useLayoutEffect(() => {
    if (isReset) {
      setValue("");

      setIsInvalid(true);

      setBorderColor({});

      valueAccessFuncOnBlur(null);
    }
  }, [isReset, valueAccessFuncOnBlur]);

  useEffect(() => {
    forceInvalidStyle && setBorderColor(invalidStyle);
  }, [forceInvalidStyle]);

  const checkValidation = (value) => {
    if (validationFunc(value)) {
      setIsInvalid(false);

      setBorderColor(validStyle);

      valueAccessFuncOnBlur && valueAccessFuncOnBlur(value);
    } else {
      setIsInvalid(true);

      setBorderColor(invalidStyle);

      valueAccessFuncOnBlur && valueAccessFuncOnBlur(null);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onBlur={(e) => {
        validationFunc && checkValidation(e.target.value);
      }}
      className={`form-control border-top-0 border-start-0 border-end-0 rounded-0 pb-2 pe-2 text-start custom-input ${
        isInvalid ? "error" : ""
      }`}
      style={borderColor}
      disabled={isDisable}
    />
  );
}
