import { createStore } from "redux";
import rootReducers from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducers, composedEnhancers);

export default store;
