import * as types from "./actionTypes"

export const loginrequest=()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}
export const loginsuccess=()=>{
    return{
        type:types.LOGIN_SUCCESS
    }
}
export const loginfailure=()=>{
    return{
        type:types.LOGIN_FAILURE
    }
}