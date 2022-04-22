const initState = {
  username: "",
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "login/loginsuccess":
      return {
        ...state,
        ...(state.isSuccess = true),
        ...(state.isError = false),
        ...(state.errorMessage = "đăng nhập thành công"),
      };
    case "login/loginfailed":
      return {
        ...state,
        ...(state.isSuccess = false),
        ...(state.isError = true),
        ...(state.errorMessage = "đăng nhập that bai"),
      };
    default:
      return state;
  }
};
