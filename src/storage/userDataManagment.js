import { getData, setData, removeData } from "./authStorage";
import { keys } from "./storagekeys";
import Encryption from "./encryption";

const encryption = new Encryption(process.env.REACT_APP_PASSWORD_ENCRYPT_KEY);

// create an encryptor function for encrypt password
const encryptor = encryption.encryptor();

// create an decryptor function
const decryptor = encryption.decryptor();

export const isEmailRegisteredBefore = (email) => {
  const usersData = getData(keys.USERS);

  return usersData.some((user) => user.email === email);
};

export const saveUserData = (key, data) => {
  if (!data) {
    setData(key, []);
    
    return;
  }

  let updatingData = getData(key);

  updatingData.push({
    ...data,
    password: encryptor(data.password),
  });

  setData(key, updatingData);
};

export const getUserData = (email) => {
  const data = getData(keys.USERS);

  const selectedUser = data.filter((user) => user.email === email)[0];

  return {
    ...selectedUser,
    password: decryptor(selectedUser.password),
  };
};

export const updateUsersData = (data) => {
  let usersData = getData(keys.USERS);

  usersData.map((user, index) => {
    if (user.email === data.email) {
      usersData[index] = { ...data, password: encryptor(data.password) };
    }
  });

  setData(keys.USERS, usersData);
};

export const updateLoginUser = (newUserData) => {
  removeData(keys.LOGIN_USER);

  saveUserData(keys.LOGIN_USER, newUserData);
};
