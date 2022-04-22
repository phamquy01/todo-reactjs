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
export default rootrootReducer;

// export default rootReducer;
