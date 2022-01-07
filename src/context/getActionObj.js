import { actionTypes } from "./reducer";

export const getDuplicateEmailErrorAction = () => {
  return {
    type: actionTypes.SIGIN_DUPLICATE_EMAIL_ERROR,
    payload: null,
  };
};

export const getSuccessfulSiginAction = () => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    payload: null,
  };
};

export const getSuccessfulLoginAction = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: null,
  };
};

export const getLoginPasswordErrorAction = () => {
  return {
    type: actionTypes.LOGIN_PASSWORD_ERROR,
    payload: null,
  };
};

export const getUnregisteredEmailErrorAction = () => {
  return {
    type: actionTypes.UNREGISTERED_EMAIL_ERROR,
    payload: null,
  };
};

export const getSuccessfulRecCodeSendAction = (user) => {
  return {
    type: actionTypes.SEND_REC_CODE_SUCCESS,
    payload: user,
  };
};

export const getUnsuccessfulRecCodeSendAction = () => {
  return {
    type: actionTypes.SEND_REC_CODE_ERROR,
    payload: null,
  };
};

export const getWrongRecCodeErrorAction = () => {
  return {
    type: actionTypes.WRONG_REC_CODE_ERROR,
    payload: null,
  };
};

export const getSuccessfulPasswordChangeAction = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: null,
  };
};

export const getLogoutAction = () => {
  return {
    type: actionTypes.LOGOUT,
    payload: null,
  };
};

export const getRemoveAlertAction = () => {
  return {
    type: actionTypes.REMOVE_ALERT,
    payload: null,
  };
};
