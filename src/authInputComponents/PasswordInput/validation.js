import { isStringMatchRegPattern } from "../../utils/checkRegPattern";

// check is there any special letter in string
const _containsSpLetter = (str) => {
  return isStringMatchRegPattern(str, /\W/g);
};

// check is there any numbers in string
const _containsNumber = (str) => {
  return isStringMatchRegPattern(str, /[0-9]/g);
};

// check is there any uppercase character in string
const _containsUppercase = (str) => {
  return isStringMatchRegPattern(str, /[A-Z]/g);
};

// check is there any lowercase character in string
const _containsLowercase = (str) => {
  return isStringMatchRegPattern(str, /[a-z]/g);
};

export const isPasswordValid = (password) => {
  return (
    _containsUppercase(password) &&
    _containsLowercase(password) &&
    _containsNumber(password) &&
    _containsSpLetter(password)
  );
};
