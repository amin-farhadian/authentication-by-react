import { actionTypes } from "./reducer";

export const getDuplicateEmailErrorAction = (loginUser) => {
  return {
    type: actionTypes.SIGIN_DUPLICATE_EMAIL_ERROR,
    payload: loginUser,
  };
};

export const getSuccessfulSiginAction = () => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    payload: null,
  };
};

export const getSuccessfulLoginAction = (loginUser) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: loginUser,
  };
};

export const getLoginPasswordErrorAction = (loginUser) => {
  return {
    type: actionTypes.LOGIN_PASSWORD_ERROR,
    payload: loginUser,
  };
};

export const getUnregisteredEmailErrorAction = (loginUser) => {
  return {
    type: actionTypes.UNREGISTERED_EMAIL_ERROR,
    payload: loginUser,
  };
};

export const getSuccessfulRecCodeSendAction = (user) => {
  return {
    type: actionTypes.SEND_REC_CODE_SUCCESS,
    payload: user,
  };
};

export const getUnsuccessfulRecCodeSendAction = (loginUser) => {
  return {
    type: actionTypes.SEND_REC_CODE_ERROR,
    payload: loginUser,
  };
};

export const getWrongRecCodeErrorAction = (loginUser) => {
  return {
    type: actionTypes.WRONG_REC_CODE_ERROR,
    payload: loginUser,
  };
};

export const getSuccessfulPasswordChangeAction = (loginUser) => {
  return {
    type: actionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: loginUser,
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
