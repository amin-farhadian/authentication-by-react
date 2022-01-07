import { isStringMatchRegPattern } from "../../utils/checkRegPattern";

export const isPhoneNumberValid = (phoneNum) => {
  const pattern = /09(0[1-5]|1[0-9]|3[1-9]|2[0-2]|9[0-4])-?[0-9]{3}-?[0-9]{4}/;

  return isStringMatchRegPattern(phoneNum, pattern);
};
