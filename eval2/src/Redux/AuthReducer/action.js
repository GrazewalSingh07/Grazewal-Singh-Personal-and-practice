//Create ActionCreator functions here
import axios from "axios"
 
import * as types from "./actionTypes"

export const loginrequest=()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}
export const loginsuccess=(payload)=>{
    return{
        type:types.LOGIN_REQUEST,
        payload
    }
}
export const loginfailure=()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}

export const login=(data)=>(dispatch)=>{
    // console.log(data)
    dispatch(loginrequest())
   return axios.post("https://reqres.in/api/login",data).then((res)=>{
        dispatch(loginsuccess(res.data.token))
        console.log(res.data)
     
       localStorage.setItem("token",JSON.stringify(res.data.token))
    }).catch((err)=>{
        dispatch(loginfailure())
    })
}