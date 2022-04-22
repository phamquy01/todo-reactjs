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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initState: "",
  reducers: {
    login(state, action: PayloadAction<string>) {},
    logginSuccess(state, action: PayloadAction<string>) {},
    logginFailed(state, action: PayloadAction<string>) {},
    logout(state) {},
  },
});

export const authAction = authSlice.action;
