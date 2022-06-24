import * as types from "./actionTypes"
import axios from "axios"
export const authRequest=()=>{
    return{
        type:types.AUTH_REQUEST
    }
}
export const authSuccess=(payload)=>{
    return{
        type:types.AUTH_SUCCESS,
        payload
    }
}
export const authFailure=(payload)=>{
    return{
        type:types.AUTH_FAILURE,
        payload
    }
}
export const authenticate=(data)=>(dispatch)=>{
    console.log(data)
    dispatch(authRequest)
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",data
    ).then((res)=>{
        dispatch(authSuccess(res.data.token))
        console.log( res)
    }).catch((err)=>{
        dispatch(authFailure(err.data))
        // console.log("err"+ err)
    })
}