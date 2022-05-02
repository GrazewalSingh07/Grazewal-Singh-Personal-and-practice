import { legacy_createStore as createStore } from "redux";
import { CounterReducer } from "./reducer";

export const store= createStore(CounterReducer,{counter:0,todo:[]})
 
