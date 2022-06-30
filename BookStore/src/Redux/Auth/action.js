import axios from "axios"
import { saveData } from "../../Utils/localStorage"
import * as types from  "./actionTypes"

export const loginRequest=()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}
export const loginSuccess=(payload)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }
}
export const loginFailure=()=>{
    return{
        type:types.LOGIN_FAILURE
    }
}
export const lOGOUT=()=>{
   
    return{
        type:types.LOG_OUT
    }
}

export const authenticate=(data)=>(dispatch)=>{
    // console.log(data)
    dispatch(loginRequest)
    return axios.post("https://reqres.in/api/login",data
    ).then((res)=>{
        dispatch(loginSuccess(res.data.token))
        saveData(res.data.token)
        // console.log(res.data.token)
    }).catch((err)=>{
        dispatch(loginFailure(err.data))
        
    })
}