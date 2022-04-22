import userReducer from "../features/Auth/userSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const login = createAsyncThunk("users/login", async (payload) => {
  try {
    // const response = await authApi.login(payload);
    localStorage.setItem("access_token", "aaa");
    localStorage.setItem("refesh_token", "avvc");
    // const username = JSON.parse(response.config.data).username
    // const responseUser = await authApi.getUser({ username: username })
    // const user = {...responseUser.data[0]}
    // const responseProfile = await authApi.getProfile({user: user.id})
    // const profile = {...responseProfile.data}
    // const data = {
    //     ...user,
    //     ...profile,
    // }
    // localStorage.setItem(StorageKeys.user, JSON.stringify(data));
    // return data
    return {};
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

export default store;
