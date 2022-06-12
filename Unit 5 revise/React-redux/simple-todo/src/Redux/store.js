import { legacy_createStore,combineReducers } from "redux";
import { reducer } from "./todo/reducer";
import { Authreducer } from "./Auth/reducer";
const rootReducer=combineReducers({
    auth: Authreducer,
    todo:reducer
})
export const store=legacy_createStore(rootReducer)