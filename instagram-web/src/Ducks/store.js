import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware())))
export default store;

// const reducers = combineReducers({ loginReducer, profileReducer,reducer});

// export default createStore(
//         reducers, 
//         applyMiddleware(reduxPromiseMiddleware())
// );
