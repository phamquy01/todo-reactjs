// import { createSlice } from "@reduxjs/toolkit";

// export const loginSlice = createSlice({
//   name: "auth",
//   initState: {
//     username: "",
//     password: "",
//     // logging: false,
//     // isSuccess: false,
//     // isError: false,
//     // errorMessage: "",
//   },
//   reducers: {
//     login(state, action) {
//       state.username = action.payload.username;
//       state.password = action.payload.password;
//       // state.logging = true;
//     },
//     // loginsuccess(state, action) {
//     //   state.logging = false;
//     //   state.isSuccess = true;
//     //   state.isError = false;
//     //   state.errorMessage = "đăng nhập thành công";
//     // },
//     // loginfailed(state, action) {
//     //   state.isSuccess = false;
//     //   state.isError = true;
//     //   state.errorMessage = "đăng nhập that bai";
//     // },
//     // logout(state, action) {
//     //   state.logging = false;
//     // },
//   },
// });
// const rootReducer = loginSlice.actions;

// export default rootReducer;
// const initState = {
//   login: {
//     username: "",
//     password: "",
//   },
// };
// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "login/loginsuccess":
//       return {
//         ...state,
//         login: {
//           ...state.login,
//           ...(state.login = action.payload),
//         },
//       };

//     case "logout":
//       return {
//         ...state,
//         login: {
//           ...state.login,
//           ...(state.login = action.payload),
//         },
//       };
//     default:
//       return state;
//   }
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear local storage
      state.current = {};
      localStorage.removeItem(StorageKeys.access);
      localStorage.removeItem(StorageKeys.refresh);
      localStorage.removeItem(StorageKeys.user);
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export default userSlice;
