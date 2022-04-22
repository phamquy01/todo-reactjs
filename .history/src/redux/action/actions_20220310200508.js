export const login = (data) => {
  return {
    type: "login/loginsuccess",
    payload: data,
  };
};
