// import { createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
