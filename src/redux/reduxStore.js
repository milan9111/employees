import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { employeesReducer } from "./employeesReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  employeesPage: employeesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
