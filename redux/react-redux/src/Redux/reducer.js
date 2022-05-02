import { ADD_COUNT, ADD_TODO } from "./action"


export const CounterReducer=(store,{type,payload})=>{
    switch(type){
        case ADD_COUNT:
            return{...store,counter:store.counter+payload}
        case ADD_TODO:
            return{...store,todo:[...store.todo,payload]}
        default:
            return store
    }
}