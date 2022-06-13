import { createStore,applyMiddleware,combineReducers} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
// import { todoreducer } from "./todo/reducer";
import { githubreducer } from "./GithubUser/Githubreducer";
import { RegisterReducer } from "./Register/RegisterRedicer";
const rootReducer=combineReducers({
   user:githubreducer,
    auth:authReducer,
    register:RegisterReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))
