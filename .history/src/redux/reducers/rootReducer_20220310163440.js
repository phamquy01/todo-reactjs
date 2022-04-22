import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initState: {
    username: "",
    logging: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    login(state, action) {
      state.logging = true;
    },
    loginsuccess(state, action) {
      state.logging = false;
      state.isSuccess = true;
      state.isError = false;
      state.errorMessage = "đăng nhập thành công";
    },
    loginfailed(state, action) {},
    logout(state, action) {},
  },
});
const rootReducer = loginSlice.actions;
export default rootReducer;

// export default rootReducer;
// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "login":
//       return {
//         ...state,
//         ...(state.logging = true),
//       };
//     case "loginsuccess":
//       return {
//         ...state,
//         ...(state.logging = false),

//         ...(state.isSuccess = true),
//         ...(state.isError = false),
//         ...(state.errorMessage = "đăng nhập thành công"),
//       };
//     case "loginfailed":
//       return {
//         ...state,
//         ...(state.isSuccess = false),
//         ...(state.isError = true),
//         ...(state.errorMessage = "đăng nhập that bai"),
//       };
//     case "logout":
//       return {
//         ...state,
//         ...(state.logging = false),
//       };
//     default:
//       return state;
//   }
// };
