export const login = (data) => {
  return {
    type: "login/loginsuccess",
    payload: data,
  };
};
export const logout = (data) => {
  return {
    type: "login/logout",
    payload: "",
  };
};
