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

    default:
      return state;
  }
};
