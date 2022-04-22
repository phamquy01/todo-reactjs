import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleWare from "redux-saga";

const composedEnhancers = composeWithDevTools();
// const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, composedEnhancers);

// const middleWare = [sagaMiddleWare];

// sagaMiddleWare.run(mySaga)
export default store;
