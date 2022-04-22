// const initState = {
//   users: [
//     {
//       id: 1,
//       username: "quypham",
//       password: "123456",
//     },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   console.log({ state, action });
//   switch (action.type) {
//     case "users/addUser":
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     default:
//       return state;
//   }
// };

const initState = {
  username: "",
  logging: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        ...(state.logging = true),
      };
    case "loginsuccess":
      return {
        ...state,
        ...(state.logging = false),

        ...(state.isSuccess = true),
        ...(state.isError = false),
        ...(state.errorMessage = "đăng nhập thành công"),
      };
    case "loginfailed":
      return {
        ...state,
        ...(state.isSuccess = false),
        ...(state.isError = true),
        ...(state.errorMessage = "đăng nhập that bai"),
      };
    case "logout":
      return {
        ...state,
        ...(state.logging = false),
      };
    default:
      return state;
  }
};
export default rootReducer;

// export default rootReducer;
