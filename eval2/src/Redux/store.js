import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {authreducer} from "./AuthReducer/reducer"
import {productreducer} from "./AppReducer/reducer"
const rootReducer=combineReducers({
  auth:authreducer,
  product:productreducer

})
export const store = createStore(rootReducer,applyMiddleware(thunk))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
