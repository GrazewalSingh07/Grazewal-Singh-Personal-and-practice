import * as types from "./actionTypes"
const initState={
    isAuth:false,
    token:null,
    isError:false,
    wait:true,
}

export const Authreducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.LOGIN_FAILURE:{
           return{
            ...state,
            isError:true
           }
        }
        case types.LOGIN_REQUEST:{
            return{
                ...state,
                wait:true,
                isError:fale,
                isAuth:false
            }
        }
        case types.LOGIN_SUCCESS:{
         return{
            isAuth:true,
            token:payload,
            isError:false,
            wait:false
         }
        }
    }
    
}