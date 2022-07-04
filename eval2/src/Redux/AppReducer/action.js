//Create ActionCreator functions here
 
import axios from "axios"
import * as types from "./actionTypes"

export const getrequest=()=>{
    return{
        type:types.GET_SHOES_DATA_REQUEST
    }
}
export const getsuccess=(payload)=>{
    return{
        type:types.GET_SHOES_DATA_SUCCESS,
        payload
    }
}
export const getfailure=()=>{
    return{
        type:types.GET_SHOES_DATA_FAILURE
    }
}

export const getdata=(filter)=>(dispatch)=>{
    dispatch(getrequest())
    axios.get("http://localhost:8080/shoes",{
        params:{
            category:filter||null    
        }
    }).then((res)=>{
        dispatch(getsuccess(res.data))
       
    }).catch((err)=>{
        dispatch(getfailure())
    })
}