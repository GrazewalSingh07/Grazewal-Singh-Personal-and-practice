import { todosActions } from "./actionTypes"

const initState={
    todos:[],
    loading:false,
    error:false
}

export const detailsReducer=(state=initState,action)=>{
    switch(action.type){
        case todosActions.DETAILS_TODO_REQUEST:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case todosActions.DETAILS_TODO_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                todos:action.payload
            }
        }
        case todosActions.DETAILS_TODO_FAILURE:{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        default :{
            return state
        }
    }
}