import * as types from "./actionTypes"


const initState={
    isAuth:false,
    token:null,
    error:null

}
export const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.AUTH_SUCCESS:{
            return{
                ...state,
                isAuth:true,
                token:payload
            }
        }
        case types.AUTH_FAILURE:{
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