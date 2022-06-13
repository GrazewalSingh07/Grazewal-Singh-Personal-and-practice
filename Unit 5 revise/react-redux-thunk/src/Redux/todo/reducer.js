import * as types from "./actionTypes"

const initState={
    todo:[],
    isLoading:true,
    isError:false,

    addtodosuccess:false,
    addtodofailed:false


}
export const todoreducer=(state=initState,{type,payload})=>{
   
    switch(type){
        case types.FETCH_TODO_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case types.FETCH_TODO_SUCCESS:{
            return{
                ...state,
                todo:payload,
                isLoading:false,
                isError:false
            }
        }
        case types.FETCH_TODO_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case types.ADD_FETCH_TODO_SUCCESS:{
            return{
                addtodosuccess:true,

            }
        }
        case types.ADD_FETCH_TODO_FAILURE:{
            return{
                ADD_FETCH_TODO_FAILURE:true
            }
        }
        default:{
            return state
        }
    }

}