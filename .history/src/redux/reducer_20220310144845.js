const initState = {
  username: "",
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "login/loginsuccess":
      return {
        ...state,
        ...(state.isSuccess = true),
        ...(state.errorMessage = "đăng nhập thành công"),
      };
    case "login/loginfailed":
      return {
        ...state,
        ...(state.isError = true),
        ...(state.errorMessage = "đăng nhập that bai"),
      };
    case "login/logout":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
