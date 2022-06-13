import * as types from "./actionTypes"
import axios from "axios"
export const RegisterRequest=()=>{
    return{
        type:types.AUTH_REQUEST
    }
}
export const RegisterSuccess=(payload)=>{
    return{
        type:types.AUTH_SUCCESS,
        payload
    }
}
export const RegisterFailure=(payload)=>{
    return{
        type:types.AUTH_FAILURE,
        payload
    }
}
export const RegisterAuthenticate=(data)=>(dispatch)=>{
    console.log(data)
    dispatch(RegisterRequest)
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",data
    ).then((res)=>{
        // dispatch(RegisterSuccess(res.data.token))
        console.log(res)
    }).catch((err)=>{
        // dispatch(RegisterFailure(err.data))
        console.log(err)
    })
}