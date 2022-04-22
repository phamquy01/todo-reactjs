import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleWare from "redux-saga";

const composedEnhancers = composeWithDevTools();
// const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, composedEnhancers);

// const middleWare = [sagaMiddleWare];

// sagaMiddleWare.run(mySaga)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
