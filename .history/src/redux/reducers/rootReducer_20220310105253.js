const initState = {
  users: [
    {
      id: 1,
      username: "quypham",
      password: "123456",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "users/addUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initState = {
//   username: "",
//   password: "",
// };
// const authSlice = createSlice({
//   name: "auth",
//   initState,
//   reducers: {
//     login(state, action) {

//     },
//     // logginSuccess(state, action) {},
//     // logginFailed(state, action) {},
//     logout(state) {},
//   },
// });

// export const authAction = authSlice.actions;

// const authReducers = authSlice.reducer;
// export default authReducers;
