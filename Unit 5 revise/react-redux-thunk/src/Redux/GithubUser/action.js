import axios from "axios"
import * as types from "./actionTypes"

export const userRequest=()=>{
    return{
        type:types.FETCH_USER_REQUEST
    }
}
export const userSuccess=(payload)=>{
    return{
        type:types.FETCH_USER_SUCCESS,
        payload
    }
}
export const userFailure=()=>{
    return {
        type:types.FETCH_USER_FAILURE
    }
}
export const fetchUsers=(page,q)=>(dispatch)=>{
    dispatch(userRequest)
    return axios.get(`https://api.github.com/search/users?page=${page}&per_page=5`,{
        params:{
            q
        }
    }).then((res)=>{
        dispatch(userSuccess(res.data.items))
        // console.log(res.data)
    }).catch((err)=>{
        dispatch(userFailure)
    })
}
 