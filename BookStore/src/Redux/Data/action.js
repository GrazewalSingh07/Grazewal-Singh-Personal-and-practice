import axios from "axios"
import * as types from "./actionTypes"

export const getDataRequest=()=>{
    return {
        type:types.GET_DATA_REQUEST
    }
}
export const getDataSuccess=(payload)=>{
    return {
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
export const getDataFailure=()=>{
    return {
        type:types.GET_DATA_FAILURE
    }
}

export const data=(filter=JSON.parse(localStorage.getItem("filter")),sort=JSON.parse(localStorage.getItem("sort")))=>(dispatch)=>{
  
    localStorage.setItem("filter",JSON.stringify(filter))
    localStorage.setItem("sort",JSON.stringify(sort))
    dispatch(getDataRequest())
   axios.get(`http://localhost:8080/books?_sort=release_year&_order=${sort}`,{
    params:{
        category:filter||null    
    }
   }).then((res)=>{
    // console.log(res.data)
    dispatch(getDataSuccess(res.data))
   }).catch((err)=>{
    dispatch(getDataFailure)
 })
 }
    

export const postDataRequest=()=>{
    return {
        type:types.GET_DATA_REQUEST
    }
}
export const postDataSuccess=(payload)=>{
    return {
        type:types.GET_DATA_SUCCESS,
        payload
    }
}

export const postDataFailure=()=>{
    return {
        type:types.GET_DATA_FAILURE
    }
}
export const patchdata=(id,data)=>(dispatch)=>{
    dispatch(getDataRequest())
    axios.patch(`http://localhost:8080/books/${id}`, data).then((res)=>
    dispatch(data())).catch((err)=>{
        dispatch(getDataFailure())
    })
}
export const Onedata=(payload)=>{
    return{
        type:types.GET_ONE_DATA,
        payload
    }
}
export const getOneDataFailure=()=>{
    return{
        type:types.GET_ONE_DATA_FAILURE
    }
}
export const findOneBook=(id)=>(dispatch)=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
        // console.log(res.data)
        dispatch(Onedata(res.data))
    })
   .catch((err)=>{
        dispatch(getOneDataFailure())
    })
}