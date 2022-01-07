export const getData = (key) => {
  let data = localStorage.getItem(key);
  
  return data ? JSON.parse(data) : [];
};

export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeData = (key) => {
  localStorage.removeItem(key);
};
