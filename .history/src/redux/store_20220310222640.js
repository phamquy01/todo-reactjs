import userReducer from "./reducers/rootReducer";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
