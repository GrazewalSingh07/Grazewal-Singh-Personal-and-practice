import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/app.reducer";
import { reducer as AuthReducer } from "./AuthReducer/auth.reducer";
 import {reducer as searchReducer} from "./Search/app.reducer"
const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
  searchReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
