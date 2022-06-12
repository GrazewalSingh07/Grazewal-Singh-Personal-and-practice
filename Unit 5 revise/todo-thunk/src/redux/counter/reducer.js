import { CounterAction, } from "./action"

const initState={
    count:Number(localStorage.getItem("count"))||0
}

export const CounterReducer=(state=initState,action)=>{
    switch (action.type){
        case CounterAction.ADD_COUNT:{
            const value=state.count+action.payload
            localStorage.setItem("count",value)
            return{
                ...state,
                count:value
            }
        }
        case CounterAction.REDUCE_COUNT:{
            const value=state.count-action.payload
            return {...state,count:value}
        }
        default :{
            return state
        }
    }
}