import * as types from "./actionTypes"

const initState={
   user:[],
    isLoading:true,
    isError:false,


}
export const githubreducer=(state=initState,{type,payload})=>{
   console.log(payload)
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
                user:payload,
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
        
        default:{
            return state
        }
    }

}