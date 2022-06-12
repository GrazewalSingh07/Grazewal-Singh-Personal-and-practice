

import {combineReducers, legacy_createStore} from "redux"
import { CounterReducer } from "./counter/reducer"
import { todoReducer } from "./todo/reducer"
import {composeWithDevTools} from "@redux-devtools/extension"
import { detailsReducer } from "./todo/details_todoReducer"
import { AuthReducer } from "./todo/authreducer"
import { compose } from "redux"


const rootreducer = combineReducers({
    counter: CounterReducer,
    todo: todoReducer,
    details:detailsReducer,
    Auth:AuthReducer
    })
export const store=legacy_createStore(rootreducer,composeWithDevTools())
