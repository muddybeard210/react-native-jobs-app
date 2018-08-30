import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Since the only files in reducers is index.js, you only need to reference the folder name and not /index.js
import reducers from "../reducers";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
