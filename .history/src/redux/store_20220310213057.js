import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from 'redux-saga'


const composedEnhancers = composeWithDevTools();
const middleWare = store => next => action => {
    console.log('action', action);
    return next(action)
}
const store = createStore(rootReducer, composedEnhancers, applyMiddleware());

export default store;
