import { getData } from "../storage/authStorage";
import { keys } from "../storage/storagekeys";
import { alertTypes } from "./getAlertTypes";

export const actionTypes = {
  SIGNIN_SUCCESS: "signin-success",

  SIGIN_DUPLICATE_EMAIL_ERROR: "sigin-duplicate-email-error",

  LOGIN_SUCCESS: "login-success",

  LOGIN_PASSWORD_ERROR: "login-password-error",

  UNREGISTERED_EMAIL_ERROR: "unregistered-email-error",

  SEND_REC_CODE_SUCCESS: "send-rec-code-success",

  SEND_REC_CODE_ERROR: "send-rec-code-error",

  WRONG_REC_CODE_ERROR: "wrong-rec-code-error",

  CHANGE_PASSWORD_SUCCESS: "change-password-success",

  LOGOUT: "logout",

  REMOVE_ALERT: "remove-alert",
};

export const initState = {
  loginUser: getData(keys.LOGIN_USER),
  alert: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        loginUser: [],
        alert: alertTypes.SUCCESSFUL_REGISTRATION,
      };

    case actionTypes.SIGIN_DUPLICATE_EMAIL_ERROR:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.DUPLICATE_EMAIL,
      };

    case actionTypes.UNREGISTERED_EMAIL_ERROR:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.NON_EXISTENT_ACCOUNT,
      };

    case actionTypes.LOGIN_PASSWORD_ERROR:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.INCORRECT_PASSWORD,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        alert: null,
      };

    case actionTypes.SEND_REC_CODE_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.SEND_REC_CODE_CONFIRM,
      };

    case actionTypes.SEND_REC_CODE_ERROR:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.SEND_REC_CODE_ERROR,
      };

    case actionTypes.WRONG_REC_CODE_ERROR:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.INCORRECT_REC_CODE,
      };

    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        alert: alertTypes.SUCCESSFUL_PASSWORD_CHANGE,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        loginUser: [],
        alert: null,
      };

    case actionTypes.REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };

    default:
      return state;
  }
};
