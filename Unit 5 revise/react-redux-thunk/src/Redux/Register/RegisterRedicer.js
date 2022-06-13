import * as types from "./actionTypes"


const initState={
    registered:false,
   error:null
}
export const RegisterReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.REGISTER_SUCCESS:{
            return{
                ...state,
                isAuth:true,
                token:payload
            }
        }
        case types.REGISTER_FAILURE:{
            return{
                ...state,
                error:payload
            }
        }
        default:{
            return state
        }
    }
}