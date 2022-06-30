import { loadData } from "../../utils/localStorage"
import * as types from "./actionTypes"

 
const initState={
   loggingIn:false,
   token:loadData("key")||null,
   error:null
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.LOGIN_SUCCESS:{
            return{
                ...state,
               loggingIn:false,
                token:payload

            }
        }
        case types.LOGIN_REQUEST:{
            return {
                ...state,
                loggingIn:true


            }
        }
        case types.LOGIN_FAILURE:{
            return{
                ...state,
                loggingIn:false,
                error:payload
            }
        }
        case types.LOG_OUT:{
            return {
                state:initState
            }
        }
        default:{
            return state
        }
    }
}