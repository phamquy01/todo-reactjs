// import { createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./reducers/rootReducer";

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});

export default store;
