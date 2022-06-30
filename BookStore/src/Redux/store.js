import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { dataReducer } from "./Data/dataReducer";

const rootReducer=combineReducers({
    auth:authReducer,
    data:dataReducer
})
export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))