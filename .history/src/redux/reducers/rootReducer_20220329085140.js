import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("users/login", async (payload) => {
  try {
    localStorage.setItem("access_token", "aaaaaa");
    return {};
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear local storage
      state.current = {};
      localStorage.clear();
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
