import * as types from "./actionTypes"


export const incrementCount=(payload)=>{
    return{
        type:types.INCREAMENT_COUNT
        
    }
}
export const decrementCount=(payload)=>{
    return {
        type:types.DECREMENT_COUNT
    }
}
